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

// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';
// import ResultsPage from './Results';
// import AnalysisLoader from './AnalysisLoader.jsx';  // Import the new AnalysisLoader component

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
//     if (calculatedScore >= 15) {
//       calculatedAnalysis = "You may be experiencing minimal or no anxiety.";
//     } else if (calculatedScore >= 5) {
//       calculatedAnalysis = "You may be experiencing mild anxiety.";
//     } else if (calculatedScore >= -5) {
//       calculatedAnalysis = "You may be experiencing moderate anxiety.";
//     } else {
//       calculatedAnalysis = "You may be experiencing severe anxiety. Consider reaching out to a healthcare provider.";
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
//       <h1 className="form-title">Anxiety Test</h1>
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

// export default AnxietyTest;


// ---------just above is working -----------

// ------- below is for , showing additional point with reuslt --------

import React, { useState } from 'react';
import './DepressionTest.css'; // Assuming you have a corresponding CSS file
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';

const AnxietyTest = () => {
  const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen",
    "Experiencing physical symptoms like a rapid heartbeat, sweating, or trembling",
    "Avoiding situations due to fear of anxiety or panic",
    "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?"
  ];

  const optionsList = [
    { options: ["Not at all", "A little bit", "Moderately", "Extremely"], scores: [0, 1, 2, 3] }, // Q1
    { options: ["Not at all", "Sometimes", "Often", "Always"], scores: [0, 1, 2, 3] }, // Q2
    { options: ["Rarely", "Occasionally", "Frequently", "Constantly"], scores: [0, 1, 2, 3] }, // Q3
    { options: ["Very easy", "Somewhat easy", "Somewhat difficult", "Very difficult"], scores: [0, 1, 2, 3] }, // Q4
    { options: ["Never", "Occasionally", "Frequently", "Always"], scores: [0, 1, 2, 3] }, // Q5
    { options: ["Not at all", "Slightly", "Moderately", "Severely"], scores: [0, 1, 2, 3] }, // Q6
    { options: ["No fear", "A little fear", "Moderate fear", "Intense fear"], scores: [0, 1, 2, 3] }, // Q7
    { options: ["Never", "Sometimes", "Often", "Always"], scores: [0, 1, 2, 3] }, // Q8
    { options: ["Never avoid", "Sometimes avoid", "Often avoid", "Always avoid"], scores: [0, 1, 2, 3] }, // Q9
    { options: ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"], scores: [0, 1, 2, 3] } // Q10
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [analysis, setAnalysis] = useState('');
  const [anxietySeverity, setAnxietySeverity] = useState('');
  const [anxietyRiskAnalysis, setAnxietyRiskAnalysis] = useState('');
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
    let anxietySeverityScore = 0;
    let anxietyRiskScore = 0;

    // Calculate the total score, anxiety severity, and anxiety risk based on selected answers
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== null) {
        const score = optionsList[questionIndex].scores[answerIndex];
        calculatedScore += score;

        // Calculate anxiety severity based on the first half of the questions
        if (questionIndex < 5) {
          anxietySeverityScore += score;
        }

        // Calculate anxiety risk based on the latter half of the questions
        if (questionIndex >= 5 && questionIndex < 9) {
          anxietyRiskScore += score;
        }
      }
    });

    // Analysis for overall anxiety based on total score
    let calculatedAnalysis = "";
    if (calculatedScore >= 15) {
      calculatedAnalysis = "You may be experiencing severe anxiety. It is recommended to consult a healthcare provider.";
    } else if (calculatedScore >= 10) {
      calculatedAnalysis = "You may be experiencing moderate anxiety.";
    } else if (calculatedScore >= 5) {
      calculatedAnalysis = "You may be experiencing mild anxiety.";
    } else {
      calculatedAnalysis = "You seem to have minimal or no anxiety.";
    }


let severityAnalysis = "";
if (anxietySeverityScore >= 12) {
  severityAnalysis = "High severity";
} else if (anxietySeverityScore >= 6) {
  severityAnalysis = "Moderate severity";
} else {
  severityAnalysis = "Low severity";
}

// Analysis for anxiety risk
let riskAnalysis = "";
if (anxietyRiskScore >= 12) {
  riskAnalysis = "High risk";
} else if (anxietyRiskScore >= 6) {
  riskAnalysis = "Moderate risk";
} else {
  riskAnalysis = "Low risk";
}

// Recommended actions based on overall anxiety score
let recommendedActionsAnalysis = [];
if (calculatedScore >= 15) {
  recommendedActionsAnalysis = ["Seek professional help", "Consider therapy", "Incorporate daily relaxation techniques like deep breathing or meditation"];
} else if (calculatedScore >= 10) {
  recommendedActionsAnalysis = ["Engage in regular physical activity", "Practice mindfulness exercises", "Monitor your symptoms and consider talking to a counselor"];
} else if (calculatedScore >= 5) {
  recommendedActionsAnalysis = ["Maintain a balanced lifestyle with regular physical activity", "Engage in stress-reducing activities like yoga or hobbies", "Stay socially connected with friends and family"];
} else {
  recommendedActionsAnalysis = ["Keep a positive mindset", "Continue with your current routine", "Focus on maintaining good mental health practices like sleep and nutrition"];
}




    // Set state for analysis and show loader
    setTotalScore(calculatedScore);
    setAnalysis(calculatedAnalysis);
    setAnxietySeverity(severityAnalysis);
    setAnxietyRiskAnalysis(riskAnalysis);
    setRecommendedActions(recommendedActionsAnalysis);
    setShowLoader(true);
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
        <AnalysisLoader duration={5000} onComplete={handleAnalysisComplete} />
      ) : showResult ? (
        <ResultsPage
          score={totalScore}
          analysis={analysis}
          mentalStability={anxietyRiskAnalysis}
          anxietyAttackRisk={anxietySeverity}
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

export default AnxietyTest;
