import React, { Component } from "react";
class FormDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showform: true,
    };
  }

  render() {
    const { showform } = this.state;
    return (
      <>
        <h1>Booked Successfully!</h1>
        <h3>Happy journey Mahendra Singh Dhoni</h3>
        <button
          id="edit"
          onClick={() => this.props.changeBool.clickHandler(showform)}
        >
          Edit
        </button>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>FirstName</td>
              <td></td>
            </tr>
            <tr>
              <td>LastName</td>
              <td></td>
            </tr>
            <tr>
              <td>Fathers Name</td>
              <td></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td></td>
            </tr>
            <tr>
              <td>Place</td>
              <td></td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td></td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td></td>
            </tr>
            <tr>
              <td>Profession</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default FormDisplay;
