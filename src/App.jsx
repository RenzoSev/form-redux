import { Component } from "react";

import FieldSetPerson from "./components/FieldSetPerson";
import FieldSetJob from "./components/FieldSetJob";

import { INITIAL_STATE } from "./services/data";

class App extends Component {
  constructor() {
    super()

    this.state = INITIAL_STATE;

    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  renderDiv() {
    const { nome, email, cpf, home, resume, job, jobDescription  } = this.state;
    
    return (
      <div>
        <div>
          <h1>{nome}</h1>
          <h2>{email}</h2>
          <h3>{cpf}</h3>
        </div>

        <div>
          <p>{home}</p>
          <p>{resume}</p>
        </div>

        <div>
          <p>{job}</p>
          <p>{jobDescription}</p>
        </div>
      </div>
    )
  };

  handleChangeState({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ renderDiv: true })
  };

  handleClear() {
    this.setState({...INITIAL_STATE});
  };

  render() {
    return (
      <form>
        <FieldSetPerson handleChangeState={this.handleChangeState} />
        <FieldSetJob handleChangeState={this.handleChangeState} />
        <button type="submit" onClick={this.handleSubmit}>Enviar</button>
        <button type="button" onClick={() => this.handleClear()}>Limpar</button>
        {this.state.renderDiv ? this.renderDiv() : ''}
      </form>
    );
  }
}

export default App;
