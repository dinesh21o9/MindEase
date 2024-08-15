// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ResultsPage.css';

// const ResultsPage = () => {
//   const location = useLocation();
//   const { score, analysis } = location.state;

//   return (
//     <div className="results-container">
//       <h1>Your Test Results</h1>
//       <p className="result-score">
//         Your Score: <span className="score-value">{score}</span>
//       </p>
//       <p className="analysis-text">{analysis}</p>
//     </div>
//   );
// };

// export default ResultsPage;



//  -------- aboce is simply working great , cangeing bloew to show it on smae page, and cahanging tthe locaiton stuf

import React from 'react';
import './ResultsPage.css';

const ResultsPage = ({ score, analysis, location }) => {
  // Fallback to location.state if props aren't directly provided
  const resultScore = score ?? location?.state?.score;
  const resultAnalysis = analysis ?? location?.state?.analysis;

  return (
    <div className="results-container">
      <h1>Your Test Results</h1>
      <p className="result-score">
        Your Score: <span className="score-value">{resultScore}</span>
      </p>
      <p className="analysis-text">{resultAnalysis}</p>
    </div>
  );
};

export default ResultsPage;
