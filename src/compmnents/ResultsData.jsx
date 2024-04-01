import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";
export default function ResultsData({ userData }) {
  const annualData = calculateInvestmentResults(userData);
  const initialValue =
    annualData[0].valueEndOfYear -
    annualData[0].annualInvestment -
    annualData[0].interest;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>INVESTMENT VALUE</th>
          <th>INTEREST (YEAR)</th>
          <th>TOTAL INTEREST</th>
          <th>INVESTED CAPITAL</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data, i) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialValue;
          const totalCapital = data.valueEndOfYear - totalInterest;
          return (
            <tr key={i}>
              <th>{data.year}</th>
              <th>{formatter.format(data.valueEndOfYear)}</th>
              <th>{formatter.format(data.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalCapital)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
