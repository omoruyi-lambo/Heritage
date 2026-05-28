import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flag, X, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { QUESTIONS, Question, SUBJECTS } from '../data/store';
import { formatTime } from '../lib/utils';

interface ExamState {
  answers: Record<string, number>;
  flaggedQuestions: Set<string>;
  timeLeft: number;
}

const ExamPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examState, setExamState] = useState<ExamState>({
    answers: {},
    flaggedQuestions: new Set(),
    timeLeft: 600, // 10 minutes
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter questions by subject
  const questions = QUESTIONS.filter(q => q.subject === subjectId);
  const subject = SUBJECTS.find(s => s.id === subjectId);

  // Timer Effect
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setExamState(prev => {
        if (prev.timeLeft <= 1) {
          handleSubmit();
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const currentQuestion: Question | undefined = questions[currentQuestionIndex];

  const selectAnswer = (optionIndex: number) => {
    if (isSubmitted) return;
    setExamState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion!.id]: optionIndex
      }
    }));
  };

  const toggleFlag = () => {
    setExamState(prev => {
      const newFlags = new Set(prev.flaggedQuestions);
      if (newFlags.has(currentQuestion!.id)) {
        newFlags.delete(currentQuestion!.id);
      } else {
        newFlags.add(currentQuestion!.id);
      }
      return { ...prev, flaggedQuestions: newFlags };
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Store results in session storage to pass to results page
    const results = {
      answers: examState.answers,
      questions: questions,
      timeSpent: 600 - examState.timeLeft,
      subjectId: subjectId
    };
    sessionStorage.setItem('examResults', JSON.stringify(results));
    navigate('/results');
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">No Questions Available</h2>
          <p className="text-gray-500 mb-6">We are adding questions for this subject soon!</p>
          <Button onClick={() => navigate('/dashboard')}>Go Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
             <h1 className="font-bold text-gray-900">{subject?.name} Practice</h1>
             <p className="text-sm text-gray-500">{questions.length} Questions</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-lg ${examState.timeLeft < 60 ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-700'}`}>
            {examState.timeLeft < 60 && <span className="animate-pulse">⚠️</span>}
            {formatTime(examState.timeLeft)}
          </div>
          <Button onClick={handleSubmit} className="bg-[#059669] hover:bg-[#047857]">
            Submit Exam
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Question Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {currentQuestion && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                   <div className="flex justify-between items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {currentQuestion.topic}
                      </span>
                      <button 
                        onClick={toggleFlag}
                        className={`p-2 rounded-full transition-colors ${examState.flaggedQuestions.has(currentQuestion.id) ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100 text-gray-400'}`}
                      >
                        <Flag className="w-5 h-5" />
                      </button>
                   </div>
                   <h2 className="text-2xl font-semibold text-gray-900">
                      Question {currentQuestionIndex + 1} of {questions.length}
                   </h2>
                   <p className="mt-4 text-lg leading-relaxed text-gray-800">
                     {currentQuestion.question}
                   </p>
                </div>

                <div className="p-8 space-y-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = examState.answers[currentQuestion.id] === index;
                    return (
                      <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center gap-4 ${
                          isSelected 
                            ? 'border-[#059669] bg-emerald-50 ring-2 ring-[#059669]/20' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 font-bold ${
                          isSelected ? 'bg-[#059669] border-[#059669] text-white' : 'border-gray-300 text-gray-500'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-lg">{option}</span>
                        {isSelected && <Check className="ml-auto w-5 h-5 text-[#059669]" />}
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between">
                   <Button 
                     variant="secondary" 
                     disabled={currentQuestionIndex === 0}
                     onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                   >
                     <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                   </Button>
                   
                   {currentQuestionIndex === questions.length - 1 ? (
                     <Button onClick={handleSubmit}>Finish Exam</Button>
                   ) : (
                     <Button onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}>
                       Next <ChevronRight className="w-4 h-4 ml-2" />
                     </Button>
                   )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar (Question Navigator) */}
        <aside className="w-80 bg-white border-l border-gray-200 hidden lg:flex flex-col">
          <div className="p-4 border-b border-gray-100">
             <h3 className="font-bold text-gray-900">Question Navigator</h3>
             <p className="text-xs text-gray-500 mt-1">Click on a number to jump</p>
          </div>
          <div className="p-4 grid grid-cols-5 gap-3 overflow-y-auto">
            {questions.map((q, index) => {
              const isAnswered = examState.answers[q.id] !== undefined;
              const isFlagged = examState.flaggedQuestions.has(q.id);
              const isActive = index === currentQuestionIndex;
              
              let className = "h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer transition-all border ";
              
              if (isActive) {
                className += "bg-[#059669] text-white border-[#059669] shadow-md scale-110";
              } else if (isAnswered) {
                className += "bg-gray-800 text-white border-gray-800 hover:bg-gray-700";
              } else if (isFlagged) {
                className += "bg-yellow-100 text-yellow-700 border-yellow-300";
              } else {
                className += "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={className}
                >
                  {index + 1}
                  {isFlagged && <span className="absolute -top-1 -right-1 text-xs">⚠️</span>}
                </button>
              );
            })}
          </div>
          
          <div className="p-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-gray-800" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-yellow-100 border border-yellow-300" />
                <span>Flagged</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-gray-200" />
                <span>Unseen</span>
              </div>
            </div>
            <Button className="w-full" onClick={handleSubmit}>
              Submit Answers
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ExamPage;
