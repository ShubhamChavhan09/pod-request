import React from "react";

// const Form = () => {
//   return (
//     <div>
//       <form onSubmit={this.handleSubmit} className="email">
//         <input type="text" placeholder="Email Address" />
//         <button type="button">Request Access</button>
//       </form>
//     </div>
//   );
// };

const initalState = { email: "", emailError: "" };

export default class Form extends React.Component {
  state = initalState;

  validate = () => {
    let emailError = "";

    if (!this.state.email.includes("@" && ".com")) {
      emailError = "Oops! Please check your email";
    }

    if (!this.state.email) {
      emailError = "Oops! Please add your email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initalState);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="email">
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <div className="error">{this.state.emailError}</div>
          <button type="submit">Request Access</button>
        </form>
      </div>
    );
  }
}
