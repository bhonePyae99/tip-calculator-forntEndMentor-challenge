import React from "react";
import BillInput from "./billInput";
import PeopleInput from "./peopleInput";
import TipSelector from "./tipSelector";
import Display from "./display";

class Calculator extends React.Component {
  state = {
    data: { bill: "", tipPercent: "", peopleCount: "1" },
    errors: {},
  };
  calculateTipAmt = (bill, tipPercent) => {
    const tipAmt = bill * tipPercent;
    return tipAmt;
  };
  handleBillInput = (e) => {
    const data = { ...this.state.data };
    data.bill = e.currentTarget.value;
    this.setState({ data });
  };

  tipSelect = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.tipPercent =
      parseFloat(input.value) >= 1 ? input.value / 100 : input.value;

    this.setState({ data });
  };

  validateProperty = (value) => {
    if (value === "0") {
      throw new Error("Can't be Zero");
    }
  };

  handlePeople = ({ currentTarget: input }) => {
    try {
      this.validateProperty(input.value);
      const errors = {};
      const data = { ...this.state.data };
      data.peopleCount = input.value;
      this.setState({ data });
      this.setState({ errors });
    } catch (ex) {
      this.setState({ errors: { peopleCount: ex.message } });
    }
  };

  handleReset = () => {
    console.log("CLICKED");
    const data = { bill: "", tipPercent: "", peopleCount: "1" };
    this.setState({ data });
  };

  render() {
    const { bill, tipPercent, peopleCount } = this.state.data;
    const tipAmt = this.calculateTipAmt(bill, tipPercent);
    const totalAmt = tipAmt * parseInt(peopleCount) + parseInt(bill);
    return (
      <div className="calculator">
        <div className="left">
          <BillInput
            handleBillInput={this.handleBillInput}
            value={this.state.data.bill}
          />
          <TipSelector
            tipSelect={this.tipSelect}
            currentTipPercent={parseFloat(this.state.data.tipPercent)}
          />
          <PeopleInput
            handlePeople={this.handlePeople}
            peopleCount={this.state.data.peopleCount}
            errors={this.state.errors}
          />
        </div>
        <div className="right">
          <Display
            tipAmt={tipAmt}
            totalAmt={totalAmt}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
