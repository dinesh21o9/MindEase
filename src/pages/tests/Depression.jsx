// import React, { useState } from 'react';
// import './DepressionTest.css';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   // Different options for each question
//   const optionsList = [
//     ["Not at all", "Several days", "More than half the days", "Nearly every day"],
//     ["Not at all", "A little", "Moderately", "Extremely"],
//     ["Rarely", "Sometimes", "Often", "Always"],
//     ["Never", "Occasionally", "Frequently", "Constantly"],
//     ["No change", "Slight change", "Moderate change", "Significant change"],
//     ["Not at all", "A little", "Moderately", "Very much"],
//     ["No trouble", "A little trouble", "Moderate trouble", "Severe trouble"],
//     ["No change", "Slightly increased", "Moderately increased", "Significantly increased"],
//     ["Never", "Rarely", "Sometimes", "Often"],
//     ["No difficulty", "A little difficulty", "Moderate difficulty", "Severe difficulty"]
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));

//   const handleOptionClick = (index, answer) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = answer;
//     setAnswers(newAnswers);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">


//         {/* -----------0 */}

//         <div class="progress-bar">
//     <div class="step active">
//         <div class="circle"></div>
//         <p>Test Questions</p>
//     </div>
//     <div class="line"></div>
//     <div class="step">
//         <div class="circle"></div>
//         <p>Optional Questions</p>
//     </div>
//     <div class="line"></div>
//     <div class="step">
//         <div class="circle"></div>
//         <p>Your Results</p>
//     </div>
// </div>

//       {/* ----------- */}
//         {/* <div className="step active">Test Questions</div>
//         <div className="step">Optional Questions</div>
//         <div className="step">Your Results</div> */}
//       </div>
//       <p className="form-instructions">
//         Over the last 2 weeks, how often have you been bothered by any of the following problems?
//         <br />Please note, all fields are required.
//       </p>
//       <form className="depression-form">
//         {questions.map((question, index) => (
//           <div key={index} className="question-block">
//             <p className="question-text">{index + 1}. {question}</p>
//             <div className="options">
//               {optionsList[index].map((option, optionIndex) => (
//                 <button
//                   type="button"
//                   key={optionIndex}
//                   className={`option-button ${answers[index] === option ? 'selected' : ''}`}
//                   onClick={() => handleOptionClick(index, option)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="next-button">Next</button>
//       </form>
//     </div>
//   );
// };

// export default DepressionTest;



// -----------------------------------






// import React, { useState } from 'react';
// import './DepressionTest.css';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   // Different options and corresponding scores for each question
//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [result, setResult] = useState("");

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;  // Store the index of the selected option
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents the form from refreshing the page
//     let totalScore = 0;

//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         totalScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let analysis = "";
//     if (totalScore >= 5) {
//       analysis = "You seem to be experiencing mild or no depression.";
//     } else if (totalScore >= 0) {
//       analysis = "You may be experiencing moderate depression.";
//     } else {
//       analysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     setResult(analysis);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className="step active">
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Optional Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>
//       <p className="form-instructions">
//         Over the last 2 weeks, how often have you been bothered by any of the following problems?
//         <br />Please note, all fields are required.
//       </p>
//       <form className="depression-form" onSubmit={handleSubmit}>
//         {questions.map((question, questionIndex) => (
//           <div key={questionIndex} className="question-block">
//             <p className="question-text">{questionIndex + 1}. {question}</p>
//             <div className="options">
//               {optionsList[questionIndex].options.map((option, optionIndex) => (
//                 <button
//                   type="button"
//                   key={optionIndex}
//                   className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                   onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="next-button">Next</button>
//       </form>

//       {/* Display the result after submission */}
//       {result && (
//         <div className="result">
//           <h2>Your Result</h2>
//           <p>{result}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DepressionTest;



// -----------above is showing result only text -----------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DepressionTest.css';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//     setError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setError("Please answer all the questions before proceeding.");
//       return;
//     }

//     let totalScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         totalScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let analysis = "";
//     if (totalScore >= 5) {
//       analysis = "You seem to be experiencing mild or no depression.";
//     } else if (totalScore >= 0) {
//       analysis = "You may be experiencing moderate depression.";
//     } else {
//       analysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     // Navigate to the results page with the score and analysis
//     navigate('/results', { state: { score: totalScore, analysis } });
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className="step active">
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Optional Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>
//       <p className="form-instructions">
//         Over the last 2 weeks, how often have you been bothered by any of the following problems?
//         <br />Please note, all fields are required.
//       </p>
//       {error && <p className="error-message">{error}</p>}
//       <form className="depression-form" onSubmit={handleSubmit}>
//         {questions.map((question, questionIndex) => (
//           <div key={questionIndex} className="question-block">
//             <p className="question-text">{questionIndex + 1}. {question}</p>
//             <div className="options">
//               {optionsList[questionIndex].options.map((option, optionIndex) => (
//                 <button
//                   type="button"
//                   key={optionIndex}
//                   className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                   onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="next-button">Next</button>
//       </form>
//     </div>
//   );
// };

// export default DepressionTest;



// ---- all is good just above :------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DepressionTest.css';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//     setError("");  // Clear any existing error when a new option is selected
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setError("Please answer all the questions before proceeding.");  // Set an error message if any question is unanswered
//       return;
//     }

//     let totalScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         totalScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let analysis = "";
//     if (totalScore >= 5) {
//       analysis = "You seem to be experiencing mild or no depression.";
//     } else if (totalScore >= 0) {
//       analysis = "You may be experiencing moderate depression.";
//     } else {
//       analysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     navigate('/results', { state: { score: totalScore, analysis } });  // Navigate to the results page with the score and analysis
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className="step active">
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Optional Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>
//       <p className="form-instructions">
//         Over the last 2 weeks, how often have you been bothered by any of the following problems?
//         <br />Please note, all fields are required.
//       </p>
//       <form className="depression-form" onSubmit={handleSubmit}>
//         {questions.map((question, questionIndex) => (
//           <div key={questionIndex} className="question-block">
//             <p className="question-text">{questionIndex + 1}. {question}</p>
//             <div className="options">
//               {optionsList[questionIndex].options.map((option, optionIndex) => (
//                 <button
//                   type="button"
//                   key={optionIndex}
//                   className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                   onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         {error && <p className="error-message">{error}</p>}  {/* Display the error message if present */}
//         <button type="submit" className="next-button">Next</button>
//       </form>
//     </div>
//   );
// };

// export default DepressionTest;


// ----- abovr is good but below will show  a modal ig ---


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DepressionTest.css';
// import Modal from './Modal';  // Import the Modal component

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);  // State to manage modal visibility
//   const navigate = useNavigate();

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);  // Show the modal if not all questions are answered
//       return;
//     }

//     let totalScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         totalScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let analysis = "";
//     if (totalScore >= 5) {
//       analysis = "You seem to be experiencing mild or no depression.";
//     } else if (totalScore >= 0) {
//       analysis = "You may be experiencing moderate depression.";
//     } else {
//       analysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     navigate('/results', { state: { score: totalScore, analysis } });  // Navigate to the results page with the score and analysis
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className="step active">
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Optional Questions</p>
//         </div>
//         <div className="line"></div>
//         <div className="step">
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>
//       <p className="form-instructions">
//         Over the last 2 weeks, how often have you been bothered by any of the following problems?
//         <br />Please note, all fields are required.
//       </p>
//       <form className="depression-form" onSubmit={handleSubmit}>
//         {questions.map((question, questionIndex) => (
//           <div key={questionIndex} className="question-block">
//             <p className="question-text">{questionIndex + 1}. {question}</p>
//             <div className="options">
//               {optionsList[questionIndex].options.map((option, optionIndex) => (
//                 <button
//                   type="button"
//                   key={optionIndex}
//                   className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                   onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="next-button">Next</button>
//       </form>

//       {/* Modal to show if not all questions are answered */}
//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Incomplete Test</h2>
//         <p>Please answer all the questions before proceeding.</p>
//         <button onClick={handleCloseModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default DepressionTest;




// above is finnal from the day 1 , below is test of day2.1 , like to show result on the same page 

// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';  // Assuming the Modal component is already set up

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);  // For the incomplete test modal
//   const [showResult, setShowResult] = useState(false);  // New state to show result instead of form
//   const [totalScore, setTotalScore] = useState(0);  // New state to store total score
//   const [analysis, setAnalysis] = useState('');  // New state to store analysis

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);  // Show the modal if not all questions are answered
//       return;
//     }

//     let calculatedScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         calculatedScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let calculatedAnalysis = "";
//     if (calculatedScore >= 5) {
//       calculatedAnalysis = "You seem to be experiencing mild or no depression.";
//     } else if (calculatedScore >= 0) {
//       calculatedAnalysis = "You may be experiencing moderate depression.";
//     } else {
//       calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     setTotalScore(calculatedScore);
//     setAnalysis(calculatedAnalysis);
//     setShowResult(true);  // Show result instead of form
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className={`step ${showResult ? '' : 'active'}`}>
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className={`line ${showResult ? 'completed' : ''}`}></div>
//         <div className={`step ${showResult ? 'active' : ''}`}>
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>

//       {showResult ? (
//         <div className="result-section">
//           <h2>Your Results</h2>
//           <p>Your Total Score: {totalScore}</p>
//           <p>{analysis}</p>
//           {/* Additional actions, e.g., retake the test or seek help, can be added here */}
//         </div>
//       ) : (
//         <>
//           <p className="form-instructions">
//             Over the last 2 weeks, how often have you been bothered by any of the following problems?
//             <br />Please note, all fields are required.
//           </p>
//           <form className="depression-form" onSubmit={handleSubmit}>
//             {questions.map((question, questionIndex) => (
//               <div key={questionIndex} className="question-block">
//                 <p className="question-text">{questionIndex + 1}. {question}</p>
//                 <div className="options">
//                   {optionsList[questionIndex].options.map((option, optionIndex) => (
//                     <button
//                       type="button"
//                       key={optionIndex}
//                       className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                       onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             <button type="submit" className="next-button">Next</button>
//           </form>
//         </>
//       )}

//       {/* Modal to show if not all questions are answered */}
//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Incomplete Test</h2>
//         <p>Please answer all the questions before proceeding.</p>
//         <button onClick={handleCloseModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default DepressionTest;

// ----------- below is to check reuse the the reuslt modal -------

// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';
// import ResultsPage from './Results';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);  // For the incomplete test modal
//   const [showResult, setShowResult] = useState(false);  // State to show results
//   const [totalScore, setTotalScore] = useState(0);  // State to store total score
//   const [analysis, setAnalysis] = useState('');  // State to store analysis

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);  // Show the modal if not all questions are answered
//       return;
//     }

//     let calculatedScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         calculatedScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let calculatedAnalysis = "";
//     if (calculatedScore >= 5) {
//       calculatedAnalysis = "You seem to be experiencing mild or no depression.";
//     } else if (calculatedScore >= 0) {
//       calculatedAnalysis = "You may be experiencing moderate depression.";
//     } else {
//       calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     setTotalScore(calculatedScore);
//     setAnalysis(calculatedAnalysis);
//     setShowResult(true);  // Show the results section
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className={`step ${!showResult ? 'active' : ''}`}>
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className={`line ${showResult ? 'completed' : ''}`}></div>
//         <div className={`step ${showResult ? 'active' : ''}`}>
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>

//       {!showResult ? (
//         <>
//           <p className="form-instructions">
//             Over the last 2 weeks, how often have you been bothered by any of the following problems?
//             <br />Please note, all fields are required.
//           </p>
//           <form className="depression-form" onSubmit={handleSubmit}>
//             {questions.map((question, questionIndex) => (
//               <div key={questionIndex} className="question-block">
//                 <p className="question-text">{questionIndex + 1}. {question}</p>
//                 <div className="options">
//                   {optionsList[questionIndex].options.map((option, optionIndex) => (
//                     <button
//                       type="button"
//                       key={optionIndex}
//                       className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                       onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             <button type="submit" className="next-button">Next</button>
//           </form>
//         </>
//       ) : (
//         <ResultsPage score={totalScore} analysis={analysis} />
//       )}

//       {/* Modal to show if not all questions are answered */}
//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Incomplete Test</h2>
//         <p>Please answer all the questions before proceeding.</p>
//         <button onClick={handleCloseModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default DepressionTest;


//  -------- above depresson i workingn cool as it is showing result modal on the same page, ------------
//-------- below is , cehck to add laoding or laxy loadingn between showingi result and click and after clickn to next --------

// --------- bwleo is very good working --------

// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';
// import ResultsPage from './Results';
// import AnalysisLoader from './AnalysisLoader.jsx';  // Import the new AnalysisLoader component

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);
//   const [showLoader, setShowLoader] = useState(false);  // New state to control the loader
//   const [showResult, setShowResult] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [analysis, setAnalysis] = useState('');

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);
//       return;
//     }

//     let calculatedScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         calculatedScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let calculatedAnalysis = "";
//     if (calculatedScore >= 5) {
//       calculatedAnalysis = "You seem to be experiencing mild or no depression.";
//     } else if (calculatedScore >= 0) {
//       calculatedAnalysis = "You may be experiencing moderate depression.";
//     } else {
//       calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     setTotalScore(calculatedScore);
//     setAnalysis(calculatedAnalysis);
//     setShowLoader(true);  // Show the loader after submitting the form
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleAnalysisComplete = () => {
//     setShowLoader(false);
//     setShowResult(true);  // Show the results after analysis is complete
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className={`step ${showResult ? '' : 'active'}`}>
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className={`line ${showResult ? 'completed' : ''}`}></div>
//         <div className={`step ${showResult ? 'active' : ''}`}>
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>

//       {showLoader ? (
//         <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />  // Show the loader for 5 seconds
//       ) : showResult ? (
//         <ResultsPage score={totalScore} analysis={analysis} />
//       ) : (
//         <>
//           <p className="form-instructions">
//             Over the last 2 weeks, how often have you been bothered by any of the following problems?
//             <br />Please note, all fields are required.
//           </p>
//           <form className="depression-form" onSubmit={handleSubmit}>
//             {questions.map((question, questionIndex) => (
//               <div key={questionIndex} className="question-block">
//                 <p className="question-text">{questionIndex + 1}. {question}</p>
//                 <div className="options">
//                   {optionsList[questionIndex].options.map((option, optionIndex) => (
//                     <button
//                       type="button"
//                       key={optionIndex}
//                       className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
//                       onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             <button type="submit" className="next-button">Next</button>
//           </form>
//         </>
//       )}

//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Incomplete Test</h2>
//         <p>Please answer all the questions before proceeding.</p>
//         <button onClick={handleCloseModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default DepressionTest;


//  ----------- belwo is test for adding new point other then results --------

// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';
// import ResultsPage from './Results';
// import AnalysisLoader from './AnalysisLoader.jsx';

// const DepressionTest = () => {
//   const questions = [
//     "Little interest or pleasure in doing things",
//     "Feeling down, depressed, or hopeless",
//     "Trouble falling or staying asleep, or sleeping too much",
//     "Feeling tired or having little energy",
//     "Poor appetite or overeating",
//     "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
//     "Trouble concentrating on things, such as reading the newspaper or watching television",
//     "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
//     "Thoughts that you would be better off dead, or of hurting yourself",
//     "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
//     { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);
//   const [showLoader, setShowLoader] = useState(false);
//   const [showResult, setShowResult] = useState(false);
//   const [totalScore, setTotalScore] = useState(0);
//   const [analysis, setAnalysis] = useState('');

//   // New states for additional analyses
//   const [mentalStability, setMentalStability] = useState('');
//   const [anxietyAttackRisk, setAnxietyAttackRisk] = useState('');
//   const [recommendedActions, setRecommendedActions] = useState('');

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);
//       return;
//     }

//     let calculatedScore = 0;
//     let stabilityScore = 0;
//     let anxietyRiskScore = 0;

//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         const score = optionsList[questionIndex].scores[answerIndex];
//         calculatedScore += score;

//         // Calculate mental stability based on selected answers (example)
//         if (questionIndex <= 4) {
//           stabilityScore += score;
//         }

//         // Calculate anxiety risk based on selected answers (example)
//         if (questionIndex >= 5 && questionIndex <= 8) {
//           anxietyRiskScore += score;
//         }
//       }
//     });

//     let calculatedAnalysis = "";
//     if (calculatedScore >= 5) {
//       calculatedAnalysis = "You seem to be experiencing mild or no depression.";
//     } else if (calculatedScore >= 0) {
//       calculatedAnalysis = "You may be experiencing moderate depression.";
//     } else {
//       calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
//     }

//     // Determine mental stability analysis
//     let stabilityAnalysis = "";
//     if (stabilityScore >= 3) {
//       stabilityAnalysis = "Your mental stability seems to be well-maintained.";
//     } else if (stabilityScore >= 0) {
//       stabilityAnalysis = "You may experience occasional instability.";
//     } else {
//       stabilityAnalysis = "You might be experiencing significant mental instability.";
//     }

//     // Determine anxiety attack risk
//     let anxietyRiskAnalysis = "";
//     if (anxietyRiskScore >= 3) {
//       anxietyRiskAnalysis = "Low risk of anxiety attacks.";
//     } else if (anxietyRiskScore >= 0) {
//       anxietyRiskAnalysis = "Moderate risk of anxiety attacks.";
//     } else {
//       anxietyRiskAnalysis = "High risk of anxiety attacks. Consider speaking with a healthcare provider.";
//     }

//     // Determine recommended actions
//     let recommendedActionsAnalysis = "";
//     if (calculatedScore >= 5) {
//       recommendedActionsAnalysis = "Continue engaging in positive activities and maintaining social connections.";
//     } else if (calculatedScore >= 0) {
//       recommendedActionsAnalysis = "Consider practicing relaxation techniques and seeking support from friends or a counselor.";
//     } else {
//       recommendedActionsAnalysis = "It may be beneficial to seek professional help and develop a structured wellness plan.";
//     }

//     setTotalScore(calculatedScore);
//     setAnalysis(calculatedAnalysis);
//     setMentalStability(stabilityAnalysis);
//     setAnxietyAttackRisk(anxietyRiskAnalysis);
//     setRecommendedActions(recommendedActionsAnalysis);
//     setShowLoader(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleAnalysisComplete = () => {
//     setShowLoader(false);
//     setShowResult(true);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Depression Test</h1>
//       <div className="progress-bar">
//         <div className={`step ${showResult ? '' : 'active'}`}>
//           <div className="circle"></div>
//           <p>Test Questions</p>
//         </div>
//         <div className={`line ${showResult ? 'completed' : ''}`}></div>
//         <div className={`step ${showResult ? 'active' : ''}`}>
//           <div className="circle"></div>
//           <p>Your Results</p>
//         </div>
//       </div>

//       {showLoader ? (
//         <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />
//       ) : showResult ? (
//         <ResultsPage
//           score={totalScore}
//           analysis={analysis}
//           mentalStability={mentalStability}
//           anxietyAttackRisk={anxietyAttackRisk}
//           recommendedActions={recommendedActions}
//         />
//       ) : (
//         <>
//           <p className="form-instructions">
//             Over the last 2 weeks, how often have you been bothered by any of the following problems?
//             <br />Please note, all fields are required.
//           </p>
//           <form className="depression-form" onSubmit={handleSubmit}>
//             {questions








// --------- belwow comp is working very great, ---------



import React, { useState } from 'react';
import './DepressionTest.css';
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';

const DepressionTest = () => {
  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead, or of hurting yourself",
    "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
  ];

  const optionsList = [
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [1, 0, -1, -2] },
    { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [1, 0, -1, -2] }
  ];


  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [analysis, setAnalysis] = useState('');

  const [mentalStability, setMentalStability] = useState('');
  const [anxietyAttackRisk, setAnxietyAttackRisk] = useState('');
  const [recommendedActions, setRecommendedActions] = useState([]);


    const handleCloseModal = () => {
    setShowModal(false);
  };


    const handleAnalysisComplete = () => {
    setShowLoader(false);
    setShowResult(true);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (answers.includes(null)) {
      setShowModal(true);
      return;
    }
  
    let calculatedScore = 0;
    let stabilityScore = 0;
    let anxietyRiskScore = 0;
  
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== null) {
        const score = optionsList[questionIndex].scores[answerIndex];
        calculatedScore += score;
  
        if (questionIndex <= 4) {
          stabilityScore += score;
        }
  
        if (questionIndex >= 5 && questionIndex <= 8) {
          anxietyRiskScore += score;
        }
      }
    });
  
    let calculatedAnalysis = "";
    if (calculatedScore >= 5) {
      calculatedAnalysis = "You seem to be experiencing mild or no depression.";
    } else if (calculatedScore >= 0) {
      calculatedAnalysis = "You may be experiencing moderate depression.";
    } else {
      calculatedAnalysis = "You may be experiencing severe depression. Consider reaching out to a healthcare provider.";
    }
  
let stabilityAnalysis = "";
if (stabilityScore >= 3) {
  stabilityAnalysis = "Stable";
} else if (stabilityScore >= 0) {
  stabilityAnalysis = "Unstable";
} else {
  stabilityAnalysis = "Highly Unstable";
}

let anxietyRiskAnalysis = "";
if (anxietyRiskScore >= 3) {
  anxietyRiskAnalysis = "Low";
} else if (anxietyRiskScore >= 0) {
  anxietyRiskAnalysis = "Moderate";
} else {
  anxietyRiskAnalysis = "High";
}


let recommendedActionsAnalysis = [];
if (calculatedScore >= 5) {
  recommendedActionsAnalysis = ["Maintain your routine", "Keep a positive attitude", "Stay physically active"];
} else if (calculatedScore >= 0) {
  recommendedActionsAnalysis = ["Relax and take breaks", "Practice mindfulness", "Engage in light activities"];
} else {
  recommendedActionsAnalysis = ["Seek help from a professional", "Talk to someone you trust", "Consider therapy"];
}

    setTotalScore(calculatedScore);
    setAnalysis(calculatedAnalysis);
    setMentalStability(stabilityAnalysis);
    setAnxietyAttackRisk(anxietyRiskAnalysis);
    setRecommendedActions(recommendedActionsAnalysis);
    setShowLoader(true);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Depression Test</h1>
      <div className="progress-bar">
        <div className={`step ${showResult ? '' : 'active'}`}>
          <div className="circle"></div>
          <p>Test Questions</p>
        </div>
        <div className={`line ${showResult ? 'completed' : ''}`}></div>
        <div className={`step ${showResult ? 'active' : ''}`}>
          <div className="circle"></div>
          <p>Your Results</p>
        </div>
      </div>

      {showLoader ? (
        <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />
      ) : showResult ? (
        <ResultsPage
          score={totalScore}
          analysis={analysis}
          mentalStability={mentalStability}
          anxietyAttackRisk={anxietyAttackRisk}
          recommendedActions={recommendedActions}
        />
      ) : (
        <>
          <p className="form-instructions">
            Over the last 2 weeks, how often have you been bothered by any of the following problems?
            <br />Please note, all fields are required.
          </p>
          <form className="depression-form" onSubmit={handleSubmit}>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="question-block">
                <p className="question-text">{questionIndex + 1}. {question}</p>
                <div className="options">
                  {optionsList[questionIndex].options.map((option, optionIndex) => (
                    <button
                      type="button"
                      key={optionIndex}
                      className={`option-button ${answers[questionIndex] === optionIndex ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(questionIndex, optionIndex)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="next-button">Next</button>
          </form>
        </>
      )}

      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Incomplete Test</h2>
        <p>Please answer all the questions before proceeding.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};
  
  export default DepressionTest;
