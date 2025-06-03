export type Answer = {
  answer: string
  isCorrect: boolean
}

export type Question = {
  question: string
  answers: Answer[]
}

export const Questions: Question[] = [
  {
    question: "What does HTML stand for?",
    answers: [
      {
        answer: "Hyper Text Markup Language",
        isCorrect: true,
      },
      {
        answer: "Home Tool Markup Language",
        isCorrect: false,
      },
      {
        answer: "Hyperlinks and Text Markup Language",
        isCorrect: false,
      },
      {
        answer: "Hyperlinking Text Management Language",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which language is primarily used for adding styles to web pages?",
    answers: [
      {
        answer: "CSS",
        isCorrect: true,
      },
      {
        answer: "HTML",
        isCorrect: false,
      },
      {
        answer: "JavaScript",
        isCorrect: false,
      },
      {
        answer: "Python",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the purpose of a CPU?",
    answers: [
      {
        answer: "To process data and execute instructions",
        isCorrect: true,
      },
      {
        answer: "To store files",
        isCorrect: false,
      },
      {
        answer: "To provide internet connection",
        isCorrect: false,
      },
      {
        answer: "To display graphics",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following is a programming language?",
    answers: [
      {
        answer: "Python",
        isCorrect: true,
      },
      {
        answer: "Photoshop",
        isCorrect: false,
      },
      {
        answer: "Chrome",
        isCorrect: false,
      },
      {
        answer: "Excel",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {
        answer: "Cascading Style Sheets",
        isCorrect: true,
      },
      {
        answer: "Computer Style Sheets",
        isCorrect: false,
      },
      {
        answer: "Creative Style Syntax",
        isCorrect: false,
      },
      {
        answer: "Colorful Style Sheets",
        isCorrect: false,
      },
    ],
  },
]
