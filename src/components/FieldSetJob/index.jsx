import { Component } from 'react';

export default class FieldSetJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runAlert: true,
    };

    this.mouseEnterAlert = this.mouseEnterAlert.bind(this);
  }

  mouseEnterAlert() {
    if (this.state.runAlert) {
      alert("Preencha com cuidado essa informação");
      this.setState({ runAlert: false });
    }
  }

  render() {
    const { handleChangeState } = this.props;
    
    return (
      <fieldset>
        <textarea
          maxLength="1000"
          placeholder="Resumo do currículo"
          required
          name="resume"
          onChange={handleChangeState}
        />

        <textarea
          maxLength="40"
          placeholder="cargo"
          required
          onMouseEnter={() => this.mouseEnterAlert()}
          name="job"
          onChange={handleChangeState}
        />

        <textarea
          maxLength="500"
          placeholder="Descrição do cargo"
          required
          name="jobDescription"
          onChange={handleChangeState}
        />
      </fieldset>
    );
  }
}
