import React, { Component } from "react";
import FormFields from "./FormFields";
import FormDisplay from "./FormDisplay";
class App extends Component {
  constructor() {
    super();

    this.state = {
      showform: false,
    };
  }
  clickHandler = (bool) => {
    this.setState({
      showform: bool,
    });
  };

  formData = (data) => {
    console.log(data);
  };

  render() {
    const { showform } = this.state;
    return showform ? (
      <FormFields data={{ formData: this.formData }} />
    ) : (
      <FormDisplay
        changeBool={{ clickHandler: this.clickHandler.bind(this) }}
      />
    );
  }
}
export default App;
