export interface Question {
  id: string;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
  description: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: "math",
    name: "Mathematics",
    icon: "calculator",
    questionCount: 120,
    description: "Algebra, Calculus, Geometry & Stats",
  },
  {
    id: "english",
    name: "English Language",
    icon: "book-open",
    questionCount: 100,
    description: "Comprehension, Grammar & Lexis",
  },
  {
    id: "biology",
    name: "Biology",
    icon: "dna",
    questionCount: 90,
    description: "Ecology, Genetics & Physiology",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "flask-conical",
    questionCount: 95,
    description: "Organic, Inorganic & Physical",
  },
  {
    id: "physics",
    name: "Physics",
    icon: "atom",
    questionCount: 85,
    description: "Mechanics, Waves & Electricity",
  },
  {
    id: "literature",
    name: "Literature-in-English",
    icon: "feather",
    questionCount: 70,
    description: "Poetry, Drama & Prose",
  },
];

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    subject: "math",
    topic: "Algebra",
    question: "Solve for x: 2x + 5 = 15",
    options: ["x = 5", "x = 10", "x = 7", "x = 3"],
    correctAnswer: 0,
    explanation: "2x = 15 - 5 = 10, so x = 5.",
  },
  {
    id: "q2",
    subject: "math",
    topic: "Geometry",
    question: "What is the sum of angles in a triangle?",
    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    correctAnswer: 1,
    explanation: "The interior angles of a triangle always add up to 180 degrees.",
  },
  {
    id: "q3",
    subject: "english",
    topic: "Grammar",
    question: "Choose the correct tense: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: 1,
    explanation: "Present simple tense for third person singular requires 'goes'.",
  },
  {
    id: "q4",
    subject: "biology",
    topic: "Ecology",
    question: "What is the primary source of energy in an ecosystem?",
    options: ["Water", "Soil", "Sunlight", "Air"],
    correctAnswer: 2,
    explanation: "Sunlight is captured by plants via photosynthesis to start the food chain.",
  },
  {
    id: "q5",
    subject: "chemistry",
    topic: "Organic",
    question: "What is the chemical symbol for Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    explanation: "Gold's chemical symbol is Au, from the Latin word 'aurum'.",
  },
  {
    id: "q6",
    subject: "physics",
    topic: "Mechanics",
    question: "What is Newton's First Law also known as?",
    options: ["Law of Gravity", "Law of Inertia", "Law of Action-Reaction", "Law of Thermodynamics"],
    correctAnswer: 1,
    explanation: "Newton's First Law states that an object at rest stays at rest unless acted upon by a force (Inertia).",
  },
  {
    id: "q7",
    subject: "math",
    topic: "Algebra",
    question: "If y = 3x - 2, what is y when x = 4?",
    options: ["10", "14", "8", "12"],
    correctAnswer: 0,
    explanation: "3(4) - 2 = 12 - 2 = 10.",
  },
  {
    id: "q8",
    subject: "english",
    topic: "Comprehension",
    question: "The antonym of 'happy' is:",
    options: ["Joyful", "Sad", "Excited", "Calm"],
    correctAnswer: 1,
    explanation: "Sad is the opposite of happy.",
  },
  {
    id: "q9",
    subject: "biology",
    topic: "Genetics",
    question: "The basic unit of heredity is called:",
    options: ["Cell", "Gene", "Nucleus", "Chromosome"],
    correctAnswer: 1,
    explanation: "Genes carry the information that determines traits.",
  },
  {
    id: "q10",
    subject: "chemistry",
    topic: "Physical",
    question: "The pH scale ranges from:",
    options: ["0 - 7", "7 - 14", "0 - 14", "1 - 10"],
    correctAnswer: 2,
    explanation: "The pH scale measures acidity/alkalinity from 0 (acidic) to 14 (basic).",
  },
];
