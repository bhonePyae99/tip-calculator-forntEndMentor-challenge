const TipSelector = ({ tipSelect, currentTipPercent }) => {
  const tipPercent = [0.05, 0.1, 0.15, 0.25, 0.5];
  const normalStyle = {
    width: "90%",
    margin: "0",
    border: "none",
    backgroundColor: "hsl(183, 100%, 15%)",
  };
  const selectedStyle = {
    width: "90%",
    margin: "0",
    border: "none",
    backgroundColor: "#26C0AB",
    color: "hsl(183, 100%, 15%)",
  };
  return (
    <div className="tip-selector">
      <span style={{ fontSize: "0.92rem" }}>Select tip % </span>
      <div className="grid-container">
        {tipPercent.map((item) => (
          <div className="grid-item" key={item}>
            <button
              type="button"
              value={item}
              className="btn btn-danger btn-lg"
              style={currentTipPercent === item ? selectedStyle : normalStyle}
              onClick={tipSelect}
            >
              {item * 100}%
            </button>
          </div>
        ))}
        <div className="grid-item">
          <input
            onChange={tipSelect}
            placeholder="Custom"
            id="tip-input"
            type="text"
            style={{
              textAlign: "center",
              width: "90%",
              margin: "0",
              borderRadius: "5px",
              fontSize: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TipSelector;
