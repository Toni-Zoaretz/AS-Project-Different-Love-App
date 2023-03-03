export const questions = [
  {
    id: 1,
    subject: "Jazz Music",
    title: "Who is The Most Famous Jazz Singers Of All Time?",
    answers: [
      "Ray Charles",
      "Ella Fitzgerald",
      "Britney Spears",
      "Michael Jackson",
    ],
    correctAnswer: "Ella Fitzgerald",
  },
  {
    id: 2,
    subject: "Movies",
    title: "Mary Jane Is The Lover Off?",
    answers: ["Shrek", "Batman", "Iron-Man", "Spider-Man"],
    correctAnswer: "Spider-Man",
  },
  {
    id: 3,
    subject: "Foodie",
    title: "Sushi Came From?",
    answers: ["Japan", "Morocco", "China", "Italy"],
    correctAnswer: "Japan",
  },
  {
    id: 4,
    _slug: "HARRY_POTTER_AUTHOR",
    subject: "Books",
    title: "Who Wrote The Book Harry Potter?",
    answers: [
      "Leo Tolstoy",
      "Dr. Seuss",
      "William Shakespeare",
      "J. K. Rowling.",
    ],
    correctAnswer: "J. K. Rowling.",
  },
];

export const questionsBySlug = Object.fromEntries(
  questions.map((q) => [q.id, q])
);
