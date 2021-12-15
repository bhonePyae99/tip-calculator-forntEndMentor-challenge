const BillInput = ({ handleBillInput, value }) => {
  return (
    <div className="bill">
      <span style={{ fontSize: "0.955rem" }}>Bill</span>
      <div className="bill-input">
        <i className="fas fa-dollar-sign" style={{ fontSize: "18px" }}></i>
        <input
          type="text"
          className="input"
          onChange={handleBillInput}
          value={value}
          autoFocus
        />
      </div>
    </div>
  );
};

export default BillInput;
