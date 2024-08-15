// import React, { useState } from 'react';
// import './DepressionTest.css';
// import { useNavigate } from 'react-router-dom';
// import Modal from './Modal';

// const AnxietyTest = () => {
//   const questions = [
//     "Feeling nervous, anxious, or on edge",
//     "Not being able to stop or control worrying",
//     "Worrying too much about different things",
//     "Trouble relaxing",
//     "Being so restless that it's hard to sit still",
//     "Becoming easily annoyed or irritable",
//     "Feeling afraid as if something awful might happen"
//   ];

//   const optionsList = [
//     { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [3, 1, 0, -2] },
//     { options: ["Not at all", "A little bit", "Quite a bit", "All the time"], scores: [3, 1, 0, -2] },
//     { options: ["No worries", "Some worries", "Moderate worries", "Excessive worries"], scores: [3, 1, 0, -2] },
//     { options: ["Very relaxed", "Somewhat relaxed", "A bit tense", "Very tense"], scores: [3, 1, 0, -2] },
//     { options: ["Not at all", "Occasionally", "Frequently", "Constantly"], scores: [3, 1, 0, -2] },
//     { options: ["Never", "Rarely", "Often", "Always"], scores: [3, 1, 0, -2] },
//     { options: ["Not at all", "Sometimes", "Often", "Almost always"], scores: [3, 1, 0, -2] }
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

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

//     let totalScore = 0;
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         totalScore += optionsList[questionIndex].scores[answerIndex];
//       }
//     });

//     let analysis = "";
//     if (totalScore >= 15) {
//       analysis = "You may be experiencing minimal or no anxiety.";
//     } else if (totalScore >= 5) {
//       analysis = "You may be experiencing mild anxiety.";
//     } else if (totalScore >= -5) {
//       analysis = "You may be experiencing moderate anxiety.";
//     } else {
//       analysis = "You may be experiencing severe anxiety. Consider reaching out to a healthcare provider.";
//     }

//     navigate('/results', { state: { score: totalScore, analysis } });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">Anxiety Test</h1>
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

//       <Modal show={showModal} handleClose={handleCloseModal}>
//         <h2>Incomplete Test</h2>
//         <p>Please answer all the questions before proceeding.</p>
//         <button onClick={handleCloseModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default AnxietyTest;



// ------------- above is normal workinng
// below is to workign next loadingn rresluts on same page 

import React, { useState } from 'react';
import './DepressionTest.css';
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';  // Import the new AnalysisLoader component

const AnxietyTest = () => {
  const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
  ];


  const optionsList = [
    { options: ["Not at all", "Several days", "More than half the days", "Nearly every day"], scores: [3, 1, 0, -2] },
    { options: ["Not at all", "A little bit", "Quite a bit", "All the time"], scores: [3, 1, 0, -2] },
    { options: ["No worries", "Some worries", "Moderate worries", "Excessive worries"], scores: [3, 1, 0, -2] },
    { options: ["Very relaxed", "Somewhat relaxed", "A bit tense", "Very tense"], scores: [3, 1, 0, -2] },
    { options: ["Not at all", "Occasionally", "Frequently", "Constantly"], scores: [3, 1, 0, -2] },
    { options: ["Never", "Rarely", "Often", "Always"], scores: [3, 1, 0, -2] },
    { options: ["Not at all", "Sometimes", "Often", "Almost always"], scores: [3, 1, 0, -2] }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);  // New state to control the loader
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [analysis, setAnalysis] = useState('');

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
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== null) {
        calculatedScore += optionsList[questionIndex].scores[answerIndex];
      }
    });

    let calculatedAnalysis = "";
    if (calculatedScore >= 15) {
      calculatedAnalysis = "You may be experiencing minimal or no anxiety.";
    } else if (calculatedScore >= 5) {
      calculatedAnalysis = "You may be experiencing mild anxiety.";
    } else if (calculatedScore >= -5) {
      calculatedAnalysis = "You may be experiencing moderate anxiety.";
    } else {
      calculatedAnalysis = "You may be experiencing severe anxiety. Consider reaching out to a healthcare provider.";
    }




    setTotalScore(calculatedScore);
    setAnalysis(calculatedAnalysis);
    setShowLoader(true);  // Show the loader after submitting the form
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAnalysisComplete = () => {
    setShowLoader(false);
    setShowResult(true);  // Show the results after analysis is complete
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Anxiety Test</h1>
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
        <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />  // Show the loader for 5 seconds
      ) : showResult ? (
        <ResultsPage score={totalScore} analysis={analysis} />
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

export default AnxietyTest;


