import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, RotateCcw, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Question } from '../data/store';
import { formatTime } from '../lib/utils';

interface StoredResults {
  answers: Record<string, number>;
  questions: Question[];
  timeSpent: number;
  subjectId: string;
}

const ResultsPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<StoredResults | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'review'>('overview');
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('examResults');
    if (stored) {
      setResults(JSON.parse(stored));
    } else {
      // If no results, maybe redirect or show dummy data? Let's show dummy data for demo.
    }
  }, []);

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
          <p className="text-gray-500 mb-6">Complete an exam to see your results here.</p>
          <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
        </div>
      </div>
    );
  }

  const { questions, answers, timeSpent } = results;
  
  const correctCount = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const score = Math.round((correctCount / questions.length) * 100);
  const isPass = score >= 50;

  const currentReviewQuestion = questions[reviewIndex];
  const userAnswerIndex = answers[currentReviewQuestion?.id || ''];
  const isCorrect = userAnswerIndex === currentReviewQuestion?.correctAnswer;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <Button variant="ghost" onClick={() => navigate('/dashboard')} className="flex items-center gap-2">
               <ChevronLeft className="w-4 h-4" /> Back to Dashboard
             </Button>
           </div>
           <div className="flex gap-2">
             <Button 
               variant={viewMode === 'overview' ? 'default' : 'ghost'} 
               onClick={() => setViewMode('overview')}
               size="sm"
             >
               Overview
             </Button>
             <Button 
               variant={viewMode === 'review' ? 'default' : 'ghost'} 
               onClick={() => setViewMode('review')}
               size="sm"
             >
               Review Answers
             </Button>
           </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {viewMode === 'overview' ? (
          <div className="space-y-8">
            {/* Score Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-12 text-center bg-gradient-to-br from-emerald-50 to-white">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${isPass ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                   <span className="text-5xl font-bold">{score}%</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-6">
                  {isPass ? 'Excellent Work!' : 'Keep Practicing!'}
                </h2>
                <p className="text-lg text-gray-500 mt-2">
                  You scored {correctCount} out of {questions.length}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-100">
                <div className="p-8 text-center border-r border-gray-100">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">{correctCount}</div>
                  <div className="text-gray-500">Correct</div>
                </div>
                <div className="p-8 text-center border-r border-gray-100">
                  <XCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">{questions.length - correctCount}</div>
                  <div className="text-gray-500">Incorrect</div>
                </div>
                <div className="p-8 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-blue-500">⏱️</div>
                  <div className="text-3xl font-bold text-gray-900">{formatTime(timeSpent)}</div>
                  <div className="text-gray-500">Time Spent</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setViewMode('review')}>
                Review Answers
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/dashboard')}>
                Try Another Exam
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold">Question {reviewIndex + 1} of {questions.length}</h3>
              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  disabled={reviewIndex === 0}
                  onClick={() => setReviewIndex(p => Math.max(0, p - 1))}
                >
                  Previous
                </Button>
                <Button 
                  variant="secondary" 
                  disabled={reviewIndex === questions.length - 1}
                  onClick={() => setReviewIndex(p => Math.min(questions.length - 1, p + 1))}
                >
                  Next
                </Button>
              </div>
            </div>

            {currentReviewQuestion && (
              <div className="p-8">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-6">{currentReviewQuestion.question}</h4>

                <div className="space-y-3">
                  {currentReviewQuestion.options.map((opt, idx) => {
                    let style = "border border-gray-200 bg-gray-50 text-gray-500";
                    if (idx === currentReviewQuestion.correctAnswer) {
                      style = "border-emerald-500 bg-emerald-50 text-emerald-900";
                    } else if (idx === userAnswerIndex && idx !== currentReviewQuestion.correctAnswer) {
                      style = "border-red-500 bg-red-50 text-red-900";
                    }

                    return (
                      <div key={idx} className={`p-4 rounded-xl flex items-center gap-4 ${style}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          idx === currentReviewQuestion.correctAnswer ? 'bg-emerald-500 text-white' : 'bg-white text-gray-400 border border-current'
                        }`}>
                          {idx === currentReviewQuestion.correctAnswer ? <CheckCircle2 className="w-5 h-5" /> : String.fromCharCode(65 + idx)}
                        </div>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h5 className="font-bold text-blue-900 mb-2">Explanation</h5>
                  <p className="text-blue-800">{currentReviewQuestion.explanation}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ResultsPage;
