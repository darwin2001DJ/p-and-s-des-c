import React, { Component } from "react";

class FormFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showform: true,
      firstname: "Mahendra Singh",
      lastname: " Dhoni",
      fathersname: "Pan Singh",
      gender: "Male",
      place: "Jharkhand",
      Nationality: "Indian",
      Hobby: "Base ball",
      proffession: "Cricket",
    };
  }

  render() {
    const {
      firstname,
      lastname,
      fathersname,
      place,
      Nationality,
      Hobby,
      proffession,
    } = this.state;
    const { data } = this.props;
    return (
      <>
        <form>
          <label>First name:</label>
          <input defaultValue={firstname} />
          <br />
          <label>Last name:</label>
          <input defaultValue={lastname} />
          <br />
          <label>Fathers name:</label>
          <input defaultValue={fathersname} />
          <br />
          <label>Place:</label>
          <input defaultValue={place} />
          <br />
          <label>Nationality:</label>
          <input defaultValue={Nationality} />
          <br />
          <label>Hobby:</label>
          <input defaultValue={Hobby} />
          <br />
          <label>Profession:</label>
          <input defaultValue={proffession} />
          <button id="save" onClick={data.formData(this.state)}>
            save
          </button>
          <button id="cancel">cancel</button>
        </form>
      </>
    );
  }
}
export default FormFields;
