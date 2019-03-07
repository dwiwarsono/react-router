import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  onClickChecked = (params) => {

    this.setState({
      isChecked: params
    });
  }

  render() {

    const { isChecked } = this.state;
    return (
      <div>Contact<br />

        <button
          type="button"
          className="btn btn-info"
          onClick={() => this.onClickChecked(false)}
        >Prompt Tidak Aktif</button><br /><br />

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.onClickChecked(true)}
        >Prompt Aktif</button>

        <Prompt // FUNGSI PROMPT INI ADALAH KETIKA KITA AKAN PINDAH MENU AKAN MEMUNCULKAN ALERT
          when={isChecked} // KETIKA BERNILAI TRUE ALERT AKAN BERFUNGSI
          message={location => (`Test Prompt React Router ${location.pathname}`)}
        />
      </div>
    );
  }
}

export default Contact;
