export const getAlphabet = (index) => {
    let result = '';
    while (index >= 0) {
      result = String.fromCharCode(65 + (index % 26)) + result;
      index = Math.floor(index / 26) - 1;
    }
    return result;
  };

export const questionsAndAnswers = [

  {"Question": "What is the capital of France?",
  "Options": ["Berlin", "Madrid", "Paris", "Rome"],
  "Correct Answer": "Paris",
  Category: 1},

  {"Question": "What is the chemical symbol for water?",
    "Options": ["CO2", "H2O", "O2", "NaCl"],
    "Correct Answer": "H2O",  Category: 2},

  {"Question": "Who was the first President of the United States?",
    "Options": ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
    "Correct Answer": "George Washington",  Category: 3},

  {"Question": "What is the value of π (pi) rounded to two decimal places?",
    "Options": ["3.14", "3.16", "3.12", "3.18"],
    "Correct Answer": "3.14",  Category: 4},

  {"Question": "Which artist released the album \"Thriller\"?",
    "Options": ["Madonna", "Michael Jackson", "Prince", "Whitney Houston"],
    "Correct Answer": "Michael Jackson",  Category: 5},
]