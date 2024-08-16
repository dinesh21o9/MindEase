// import React, { useState } from 'react';
// import './DepressionTest.css';
// import { useNavigate } from 'react-router-dom';
// import Modal from './Modal';

// const PTSDTest = () => {
//   const questions = [
//     "How often have you experienced unwanted memories or flashbacks of a traumatic event?",
//     "Do you avoid certain activities, places, or people that remind you of the traumatic event?",
//     "How detached or numb do you feel from others?",
//     "How often do you have trouble sleeping due to stress or anxiety?",
//     "How often do you feel jumpy or easily startled?",
//     "How intense are your physical or emotional reactions when you are reminded of the traumatic event?",
//     "How much have you lost interest in activities you used to enjoy?"
//   ];

//   const optionsList = [
//     { options: ["Never", "Rarely", "Sometimes", "Frequently"], scores: [3, 1, 0, -2] }, // Q1
//     { options: ["Never", "Occasionally", "Frequently", "Almost Always"], scores: [3, 1, 0, -2] }, // Q2
//     { options: ["Fully Connected", "Slightly Detached", "Moderately Detached", "Completely Numb"], scores: [3, 1, 0, -2] }, // Q3
//     { options: ["Always Sleep Well", "Occasional Sleep Trouble", "Frequent Sleep Trouble", "Constant Insomnia"], scores: [3, 1, 0, -2] }, // Q4
//     { options: ["Never Startled", "Sometimes Startled", "Often Startled", "Constantly Jumpy"], scores: [3, 1, 0, -2] }, // Q5
//     { options: ["No Reaction", "Mild Reaction", "Strong Reaction", "Intense Reaction"], scores: [3, 1, 0, -2] }, // Q6
//     { options: ["No Loss of Interest", "Slight Loss", "Moderate Loss", "Complete Loss of Interest"], scores: [3, 1, 0, -2] } // Q7
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
//       analysis = "You may be experiencing minimal or no PTSD symptoms.";
//     } else if (totalScore >= 5) {
//       analysis = "You may be experiencing mild PTSD symptoms.";
//     } else if (totalScore >= -5) {
//       analysis = "You may be experiencing moderate PTSD symptoms.";
//     } else {
//       analysis = "You may be experiencing severe PTSD symptoms. Consider reaching out to a healthcare provider.";
//     }

//     navigate('/results', { state: { score: totalScore, analysis } });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="form-container">
//       <h1 className="form-title">PTSD Test</h1>
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

// export default PTSDTest;





//  ------------ above is normal woriking , 
// ----------- below is next loading - resultf on same page


// import React, { useState } from 'react';
// import './DepressionTest.css';
// import Modal from './Modal';
// import ResultsPage from './Results';
// import AnalysisLoader from './AnalysisLoader.jsx';  // Import the new AnalysisLoader component

// const PTSDTest = () => {
//    const questions = [
//     "How often have you experienced unwanted memories or flashbacks of a traumatic event?",
//     "Do you avoid certain activities, places, or people that remind you of the traumatic event?",
//     "How detached or numb do you feel from others?",
//     "How often do you have trouble sleeping due to stress or anxiety?",
//     "How often do you feel jumpy or easily startled?",
//     "How intense are your physical or emotional reactions when you are reminded of the traumatic event?",
//     "How much have you lost interest in activities you used to enjoy?"
//   ];

//   const optionsList = [
//     { options: ["Never", "Rarely", "Sometimes", "Frequently"], scores: [3, 1, 0, -2] }, // Q1
//     { options: ["Never", "Occasionally", "Frequently", "Almost Always"], scores: [3, 1, 0, -2] }, // Q2
//     { options: ["Fully Connected", "Slightly Detached", "Moderately Detached", "Completely Numb"], scores: [3, 1, 0, -2] }, // Q3
//     { options: ["Always Sleep Well", "Occasional Sleep Trouble", "Frequent Sleep Trouble", "Constant Insomnia"], scores: [3, 1, 0, -2] }, // Q4
//     { options: ["Never Startled", "Sometimes Startled", "Often Startled", "Constantly Jumpy"], scores: [3, 1, 0, -2] }, // Q5
//     { options: ["No Reaction", "Mild Reaction", "Strong Reaction", "Intense Reaction"], scores: [3, 1, 0, -2] }, // Q6
//     { options: ["No Loss of Interest", "Slight Loss", "Moderate Loss", "Complete Loss of Interest"], scores: [3, 1, 0, -2] } // Q7
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
//       <h1 className="form-title">PTSD Test</h1>
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

// export default PTSDTest;




//  below is test for showing additional points other then results score ------


import React, { useState } from 'react';
import './DepressionTest.css'; // Assuming you have a corresponding CSS file
import Modal from './Modal';
import ResultsPage from './Results';
import AnalysisLoader from './AnalysisLoader.jsx';

const PTSDTest = () => {
   const questions = [
    "How often have you experienced unwanted memories or flashbacks of a traumatic event?",
    "Do you avoid certain activities, places, or people that remind you of the traumatic event?",
    "How detached or numb do you feel from others?",
    "How often do you have trouble sleeping due to stress or anxiety?",
    "How often do you feel jumpy or easily startled?",
    "How intense are your physical or emotional reactions when you are reminded of the traumatic event?",
    "How much have you lost interest in activities you used to enjoy?"
  ];

  const optionsList = [
    { options: ["Never", "Rarely", "Sometimes", "Frequently"], scores: [3, 1, 0, -2] }, // Q1
    { options: ["Never", "Occasionally", "Frequently", "Almost Always"], scores: [3, 1, 0, -2] }, // Q2
    { options: ["Fully Connected", "Slightly Detached", "Moderately Detached", "Completely Numb"], scores: [3, 1, 0, -2] }, // Q3
    { options: ["Always Sleep Well", "Occasional Sleep Trouble", "Frequent Sleep Trouble", "Constant Insomnia"], scores: [3, 1, 0, -2] }, // Q4
    { options: ["Never Startled", "Sometimes Startled", "Often Startled", "Constantly Jumpy"], scores: [3, 1, 0, -2] }, // Q5
    { options: ["No Reaction", "Mild Reaction", "Strong Reaction", "Intense Reaction"], scores: [3, 1, 0, -2] }, // Q6
    { options: ["No Loss of Interest", "Slight Loss", "Moderate Loss", "Complete Loss of Interest"], scores: [3, 1, 0, -2] } // Q7
  ];

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAnalysisComplete = () => {
    setShowLoader(false);
    setShowResult(true);
  };

  // const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  // const [showModal, setShowModal] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);
  // const [showResult, setShowResult] = useState(false);
  // const [totalScore, setTotalScore] = useState(0);
  // const [analysis, setAnalysis] = useState('');
  // const [anxietySeverity, setAnxietySeverity] = useState('');
  // const [anxietyRiskAnalysis, setAnxietyRiskAnalysis] = useState('');
  // const [recommendedActions, setRecommendedActions] = useState([]);


  // const handleOptionClick = (questionIndex, optionIndex) => {
  //   const newAnswers = [...answers];
  //   newAnswers[questionIndex] = optionIndex;
  //   setAnswers(newAnswers);
  // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (answers.includes(null)) {
//       setShowModal(true);
//       return;
//     }

//     let calculatedScore = 0;
//     let anxietySeverityScore = 0;
//     let anxietyRiskScore = 0;

//     // Calculate the total score, anxiety severity, and anxiety risk based on selected answers
//     answers.forEach((answerIndex, questionIndex) => {
//       if (answerIndex !== null) {
//         const score = optionsList[questionIndex].scores[answerIndex];
//         calculatedScore += score;

//         // Calculate anxiety severity based on the first half of the questions
//         if (questionIndex < 5) {
//           anxietySeverityScore += score;
//         }

//         // Calculate anxiety risk based on the latter half of the questions
//         if (questionIndex >= 5 && questionIndex < 9) {
//           anxietyRiskScore += score;
//         }
//       }
//     });

//     // Analysis for overall anxiety based on total score
//     let calculatedAnalysis = "";
//     if (calculatedScore >= 15) {
//       calculatedAnalysis = "You may be experiencing severe anxiety. It is recommended to consult a healthcare provider.";
//     } else if (calculatedScore >= 10) {
//       calculatedAnalysis = "You may be experiencing moderate anxiety.";
//     } else if (calculatedScore >= 5) {
//       calculatedAnalysis = "You may be experiencing mild anxiety.";
//     } else {
//       calculatedAnalysis = "You seem to have minimal or no anxiety.";
//     }


// let severityAnalysis = "";
// if (anxietySeverityScore >= 12) {
//   severityAnalysis = "High severity";
// } else if (anxietySeverityScore >= 6) {
//   severityAnalysis = "Moderate severity";
// } else {
//   severityAnalysis = "Low severity";
// }

// // Analysis for anxiety risk
// let riskAnalysis = "";
// if (anxietyRiskScore >= 12) {
//   riskAnalysis = "High risk";
// } else if (anxietyRiskScore >= 6) {
//   riskAnalysis = "Moderate risk";
// } else {
//   riskAnalysis = "Low risk";
// }

// // Recommended actions based on overall anxiety score
// let recommendedActionsAnalysis = [];
// if (calculatedScore >= 15) {
//   recommendedActionsAnalysis = ["Seek professional help", "Consider therapy", "Incorporate daily relaxation techniques like deep breathing or meditation"];
// } else if (calculatedScore >= 10) {
//   recommendedActionsAnalysis = ["Engage in regular physical activity", "Practice mindfulness exercises", "Monitor your symptoms and consider talking to a counselor"];
// } else if (calculatedScore >= 5) {
//   recommendedActionsAnalysis = ["Maintain a balanced lifestyle with regular physical activity", "Engage in stress-reducing activities like yoga or hobbies", "Stay socially connected with friends and family"];
// } else {
//   recommendedActionsAnalysis = ["Keep a positive mindset", "Continue with your current routine", "Focus on maintaining good mental health practices like sleep and nutrition"];
// }




//     // Set state for analysis and show loader
//     setTotalScore(calculatedScore);
//     setAnalysis(calculatedAnalysis);
//     setAnxietySeverity(severityAnalysis);
//     setAnxietyRiskAnalysis(riskAnalysis);
//     setRecommendedActions(recommendedActionsAnalysis);
//     setShowLoader(true);
//   };


// const handleCloseModal = () => {
//   setShowModal(false);
// };

// const handleAnalysisComplete = () => {
//   setShowLoader(false);
//   setShowResult(true);
// };

const [answers, setAnswers] = useState(Array(questions.length).fill(null));
const [showModal, setShowModal] = useState(false);
const [showLoader, setShowLoader] = useState(false);
const [showResult, setShowResult] = useState(false);
const [totalScore, setTotalScore] = useState(0);
const [analysis, setAnalysis] = useState('');
const [ptsdSeverity, setPtsdSeverity] = useState('');
const [ptsdRiskAnalysis, setPtsdRiskAnalysis] = useState('');
const [recommendedActions, setRecommendedActions] = useState([]);

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
  let ptsdSeverityScore = 0;
  let ptsdRiskScore = 0;

  // Calculate the total score, PTSD severity, and PTSD risk based on selected answers
  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) {
      const score = optionsList[questionIndex].scores[answerIndex];
      calculatedScore += score;

      // PTSD severity based on first few questions
      if (questionIndex < 5) {
        ptsdSeverityScore += score;
      }

      // PTSD risk based on later questions
      if (questionIndex >= 5 && questionIndex < 9) {
        ptsdRiskScore += score;
      }
    }
  });

  // PTSD analysis based on total score
  let calculatedAnalysis = "";
  if (calculatedScore >= 20) {
    calculatedAnalysis = "You may be experiencing severe PTSD symptoms. Consulting a healthcare provider is highly recommended.";
  } else if (calculatedScore >= 15) {
    calculatedAnalysis = "You may be experiencing moderate PTSD symptoms.";
  } else if (calculatedScore >= 5) {
    calculatedAnalysis = "You may be experiencing mild PTSD symptoms.";
  } else {
    calculatedAnalysis = "You have minimal or no PTSD symptoms.";
  }

  // Severity analysis for PTSD
  let severityAnalysis = "";
  if (ptsdSeverityScore >= 15) {
    severityAnalysis = "High severity";
  } else if (ptsdSeverityScore >= 8) {
    severityAnalysis = "Moderate severity";
  } else {
    severityAnalysis = "Low severity";
  }

  // PTSD risk analysis
  let riskAnalysis = "";
  if (ptsdRiskScore >= 15) {
    riskAnalysis = "High risk";
  } else if (ptsdRiskScore >= 8) {
    riskAnalysis = "Moderate risk";
  } else {
    riskAnalysis = "Low risk";
  }

  // Recommended actions based on PTSD analysis
  let recommendedActionsAnalysis = [];
  if (calculatedScore >= 20) {
    recommendedActionsAnalysis = [
      "Seek professional counseling",
      "Consider trauma-focused therapies",
      "Practice grounding techniques and mindfulness"
    ];
  } else if (calculatedScore >= 15) {
    recommendedActionsAnalysis = [
      "Engage in support groups or peer counseling",
      "Incorporate stress management practices like yoga or meditation",
      "Monitor your symptoms regularly"
    ];
  } else if (calculatedScore >= 5) {
    recommendedActionsAnalysis = [
      "Maintain a healthy lifestyle",
      "Engage in relaxation exercises",
      "Stay connected with loved ones for support"
    ];
  } else {
    recommendedActionsAnalysis = [
      "Continue with your current routine",
      "Focus on positive mental health practices",
      "Monitor for any significant changes in symptoms"
    ];
  }

  // Set state for analysis and show loader
  setTotalScore(calculatedScore);
  setAnalysis(calculatedAnalysis);
  setPtsdSeverity(severityAnalysis);
  setPtsdRiskAnalysis(riskAnalysis);
  setRecommendedActions(recommendedActionsAnalysis);
  setShowLoader(true);
};



  return (
    <div className="form-container">
      <h1 className="form-title">PTSD Test</h1>
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
            mentalStability={ptsdRiskAnalysis}  
            anxietyAttackRisk={ptsdSeverity} 
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

export default PTSDTest;
