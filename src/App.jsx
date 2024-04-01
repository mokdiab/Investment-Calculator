import { useState } from "react";
import Header from "./compmnents/Header";
import Calculator from "./compmnents/Calculator";
import ResultsData from "./compmnents/ResultsData";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });
  const inputIsValid = userInput.duration > 0;
  const handleChange = function (inputIdentifier, newValue) {
    setUserInput((prevData) => {
      return { ...prevData, [inputIdentifier]: +newValue };
    });
  };

  return (
    <main>
      <Header />
      <Calculator userData={userInput} handleChange={handleChange} />
      {inputIsValid && <ResultsData userData={userInput} />}
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
    </main>
  );
}

export default App;
