export default function Calculator({ userData, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(ev) =>
              handleChange("initialInvestment", ev.target.value)
            }
            value={userData.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(ev) => handleChange("annualInvestment", ev.target.value)}
            value={userData.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input
            type="number"
            required
            onChange={(ev) => handleChange("expectedReturn", ev.target.value)}
            value={userData.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input
            type="number"
            required
            onChange={(ev) => handleChange("duration", ev.target.value)}
            value={userData.duration}
          />
        </p>
      </div>
    </section>
  );
}
