const probabilityQuestions = [
  // ---------------- Easy (6) ----------------
  {
    id: 1,
    question: "What is the probability of getting a head when tossing a fair coin?",
    options: ["0", "0.25", "0.5", "1"],
    answer: "0.5"
  },
  {
    id: 2,
    question: "What is the probability of rolling an even number on a fair die?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/2"
  },
  {
    id: 3,
    question: "What is the probability of drawing a red card from a standard deck of 52 cards?",
    options: ["1/4", "1/2", "1/3", "2/3"],
    answer: "1/2"
  },
  {
    id: 4,
    question: "If a bag has 3 red and 2 blue balls, what is the probability of picking a blue ball?",
    options: ["1/2", "2/5", "3/5", "1/3"],
    answer: "2/5"
  },
  {
    id: 5,
    question: "What is the probability of rolling a number greater than 4 on a fair die?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/3"
  },
  {
    id: 6,
    question: "What is the probability of selecting a vowel from the word 'CAT'?",
    options: ["0", "1/3", "1/2", "2/3"],
    answer: "1/3"
  },

  // ---------------- Medium (6) ----------------
  {
    id: 7,
    question: "Two coins are tossed. What is the probability of getting at least one head?",
    options: ["1/2", "1/3", "3/4", "1/4"],
    answer: "3/4"
  },
  {
    id: 8,
    question: "A card is drawn from a deck. What is the probability that it is a king or a queen?",
    options: ["1/26", "1/13", "2/13", "1/52"],
    answer: "2/13"
  },
  {
    id: 9,
    question: "A bag contains 5 white and 3 black balls. What is the probability of drawing a black ball?",
    options: ["1/2", "3/8", "5/8", "2/5"],
    answer: "3/8"
  },
  {
    id: 10,
    question: "A die is rolled twice. What is the probability of getting a sum of 7?",
    options: ["1/6", "1/12", "1/9", "1/36"],
    answer: "1/6"
  },
  {
    id: 11,
    question: "What is the probability of getting two heads when three coins are tossed?",
    options: ["1/8", "3/8", "1/4", "1/2"],
    answer: "3/8"
  },
  {
    id: 12,
    question: "A number is chosen randomly between 1 and 20. What is the probability that it is divisible by 3?",
    options: ["1/5", "1/4", "3/10", "2/5"],
    answer: "3/10"
  },

  // ---------------- Hard (8) ----------------
  {
    id: 13,
    question: "In a box, there are 6 red, 4 blue, and 5 green balls. One ball is chosen at random. What is the probability that it is neither red nor blue?",
    options: ["5/15", "5/10", "5/11", "5/12"],
    answer: "5/15"
  },
  {
    id: 14,
    question: "A card is drawn from a well-shuffled deck. What is the probability that it is neither an ace nor a king?",
    options: ["44/52", "40/52", "48/52", "36/52"],
    answer: "44/52"
  },
  {
    id: 15,
    question: "A bag contains 4 red, 5 black, and 6 white balls. Two balls are drawn at random. What is the probability that both are black?",
    options: ["2/15", "1/7", "5/21", "10/91"],
    answer: "10/91"
  },
  {
    id: 16,
    question: "The probability that A solves a problem is 1/2 and that B solves it is 1/3. What is the probability that the problem is solved when both try independently?",
    options: ["5/6", "2/3", "1/2", "1/3"],
    answer: "2/3"
  },
  {
    id: 17,
    question: "A card is drawn from a deck. Find the probability of getting (i) a black card and (ii) a red king.",
    options: ["1/2 and 1/26", "1/2 and 1/13", "1/3 and 1/26", "1/4 and 1/26"],
    answer: "1/2 and 1/26"
  },
  {
    id: 18,
    question: "A coin is tossed three times. What is the probability of getting at least two heads?",
    options: ["3/8", "1/2", "5/8", "7/8"],
    answer: "1/2"
  },
  {
    id: 19,
    question: "A card is drawn from a standard deck. What is the probability of getting (i) a spade, or (ii) a non-face card?",
    options: ["1/4 and 10/13", "1/2 and 9/13", "1/4 and 12/13", "1/13 and 3/4"],
    answer: "1/4 and 10/13"
  },
  {
    id: 20,
    question: "Two dice are thrown together. What is the probability of getting a doublet?",
    options: ["1/12", "1/6", "1/8", "1/9"],
    answer: "1/6"
  }
];

export default probabilityQuestions;
