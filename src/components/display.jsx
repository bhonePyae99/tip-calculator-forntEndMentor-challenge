const Display = ({ tipAmt, totalAmt, handleReset }) => {
  console.log(tipAmt);
  return (
    <div className="display-container">
      <div className="right-top">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="col" style={{ lineHeight: "16px", color: "white" }}>
            <p style={{ fontSize: "0.955rem", marginBottom: "0" }}>
              Tip Amount
            </p>
            <small style={{ fontSize: "0.855rem", opacity: "0.5" }}>
              / Person
            </small>
          </div>
          <div className="col fs-2" style={{ color: "#26C0AB" }}>
            {"$" + (tipAmt === 0 ? "0.00" : tipAmt)}
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="col" style={{ lineHeight: "16px", color: "white" }}>
            <p style={{ fontSize: "0.955rem", marginBottom: "0" }}>Total</p>
            <small style={{ fontSize: "0.855rem", opacity: "0.5" }}>
              / Person
            </small>
          </div>
          <div className="col fs-2" style={{ color: "#26C0AB" }}>
            {"$" + (totalAmt === 0 || isNaN(totalAmt) ? "0.00" : totalAmt)}
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mb-4"
        type="button"
        onClick={handleReset}
        style={{ color: "hsl(183, 100%, 15%)", backgroundColor: "#26C0AB" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Display;
