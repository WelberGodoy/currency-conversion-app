import React from 'react';

function ConversionResult({ convertedAmount }) {
  return (
    <div className="result-container">
      <h2>Converted Amount:</h2>
      <p className="result">{convertedAmount}</p>
    </div>
  );
}

export default ConversionResult;
