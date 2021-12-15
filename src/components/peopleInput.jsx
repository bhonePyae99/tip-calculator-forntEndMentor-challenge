const PeopleInput = ({ handlePeople, peopleCount, errors }) => {
  return (
    <div className="bill">
      <div className="info">
        <span style={{ fontSize: "0.955rem" }}>Number of people</span>
        {errors.peopleCount && (
          <div class="invalidFeedback">{errors.peopleCount}</div>
        )}
      </div>
      <div className={errors.peopleCount ? "invalid" : "bill-input"}>
        <i className="fas fa-user" style={{ fontSize: "18px" }}></i>
        <input
          type="text"
          className="input"
          onChange={handlePeople}
          value={peopleCount}
          onFocus={(e) => {
            e.currentTarget.value = "";
          }}
        />
      </div>
    </div>
  );
};

export default PeopleInput;
