import axios from "axios"

// const questions = {
//   "response_code": 0,
//   "results": [
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "How many zeptometres are inside one femtometre?",
//           "correct_answer": "1,000,000",
//           "incorrect_answers": [
//               "10",
//               "1,000,000,000",
//               "1000"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "The notion of a &quot;set that contains all sets which do not contain themselves&quot; is a paradoxical idea attributed to which English philospher?",
//           "correct_answer": "Bertrand Russel",
//           "incorrect_answers": [
//               "Francis Bacon",
//               "John Locke",
//               "Alfred North Whitehead"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "medium",
//           "category": "Science: Mathematics",
//           "question": "How many books are in Euclid&#039;s Elements of Geometry?",
//           "correct_answer": "13",
//           "incorrect_answers": [
//               "8",
//               "10",
//               "17"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Science: Mathematics",
//           "question": "What&#039;s the square root of 49?",
//           "correct_answer": "7",
//           "incorrect_answers": [
//               "4",
//               "12",
//               "9"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "medium",
//           "category": "Science: Mathematics",
//           "question": "Which of the following dice is not a platonic solid?",
//           "correct_answer": "10-sided die",
//           "incorrect_answers": [
//               "12-sided die",
//               "20-sided die",
//               "8-sided die"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "The French mathematician &Eacute;variste Galois is primarily known for his work in which?",
//           "correct_answer": "Galois Theory",
//           "incorrect_answers": [
//               "Galois&#039; Continued Fractions",
//               "Galois&#039; Method for PDE&#039;s ",
//               "Abelian Integration"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "medium",
//           "category": "Science: Mathematics",
//           "question": "What is the alphanumeric representation of the imaginary number?",
//           "correct_answer": "i",
//           "incorrect_answers": [
//               "e",
//               "n",
//               "x"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "What is the approximate value of mathematical constant e?",
//           "correct_answer": "2.72",
//           "incorrect_answers": [
//               "3.14",
//               "1.62",
//               "1.41"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "Which of the following mathematicians made major contributions to game theory?",
//           "correct_answer": "John Von Neumann",
//           "incorrect_answers": [
//               "Carl Friedrich Gauss",
//               "Leonhard Euler",
//               "Stefan Banach"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "What is the fourth digit of &pi;?",
//           "correct_answer": "1",
//           "incorrect_answers": [
//               "2",
//               "3",
//               "4"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "The decimal number 31 in hexadecimal would be what?",
//           "correct_answer": "1F",
//           "incorrect_answers": [
//               "3D",
//               "2E",
//               "1B"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "What is the derivative of Acceleration with respect to time?",
//           "correct_answer": "Jerk",
//           "incorrect_answers": [
//               "Shift",
//               "Bump",
//               "Slide"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Science: Mathematics",
//           "question": "What prime number comes next after 19?",
//           "correct_answer": "23",
//           "incorrect_answers": [
//               "25",
//               "21",
//               "27"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "hard",
//           "category": "Science: Mathematics",
//           "question": "What is the plane curve proposed by Descartes to challenge Fermat&#039;s extremum-finding techniques called?",
//           "correct_answer": "Folium of Descartes",
//           "incorrect_answers": [
//               "Elliptic Paraboloid of Descartes",
//               "Cartesian Coordinates",
//               "Descarte&#039;s Helicoid"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "Science: Mathematics",
//           "question": "What is the correct order of operations for solving equations?",
//           "correct_answer": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
//           "incorrect_answers": [
//               "Addition, Multiplication, Division, Subtraction, Addition, Parentheses",
//               "Parentheses, Exponents, Addition, Substraction, Multiplication, Division",
//               "The order in which the operations are written."
//           ]
//       }
//   ]
// }

export const getQuestions = async () => {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=15&category=19&type=multiple');
        return response.data.results;
        // return questions;
    } catch (err) {
        console.log(err);

    }
}