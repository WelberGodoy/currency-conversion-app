import React, { useState } from 'react';
import './styles.css';
import CurrencyConverterForm from './components/CurrencyConverterForm';
import ConversionResult from './components/ConversionResult';

function App() {
  const exchangeRates = {
    'CAD -> USD': 0.76158,
    'USD -> GBP': 0.76700,
    'CHF -> GBP': 0.84295,
    'AUD -> EUR': 0.61175,
  };

  const [conversionPair, setConversionPair] = useState('CAD -> USD');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const handleConvert = () => {
    const conversionRate = exchangeRates[conversionPair];
    if (conversionRate !== undefined) {
      const converted = amount * conversionRate;
      setConvertedAmount(converted.toFixed(4));
    } else {
      setConvertedAmount('Invalid Conversion');
    }
  };

  return (
    <div className="App">
      <h1>Currency Conversion</h1>
      <CurrencyConverterForm
        exchangeRates={exchangeRates}
        conversionPair={conversionPair}
        amount={amount}
        onConversionPairChange={(e) => setConversionPair(e.target.value)}
        onAmountChange={(e) => setAmount(e.target.value)}
        onConvert={handleConvert}
      />
      <ConversionResult convertedAmount={convertedAmount} />
    </div>
  );
}

export default App;
