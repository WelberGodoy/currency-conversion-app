import React from 'react';

function CurrencyConverterForm({ exchangeRates, conversionPair, amount, onConversionPairChange, onAmountChange, onConvert }) {
  return (
    <div className="form-card">
      <div className="form-group">
        <label>Conversion Pair:</label>     
        <select value={conversionPair} onChange={onConversionPairChange}>
          {Object.keys(exchangeRates).map((pair) => (
            <option key={pair} value={pair}>
              {pair}
            </option>
          ))}
        </select>
        <label>Amount to Convert:</label>
        <input type="number" value={amount} onChange={onAmountChange} />
        <div className="form-group button-container">
          <button className="convert-button" onClick={onConvert}>Convert</button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverterForm;
