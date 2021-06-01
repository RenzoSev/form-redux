import { Component } from 'react';

import InputRadioLabel from '../InputRadioLabel/index.jsx';
import InputLabel from '../InputLabel/index.jsx';

import { dataInputs, states, dataRadio } from '../../services/data';

export default class FieldSetPerson extends Component {
  render() {
    const { handleChangeState, handleSelectState } = this.props;
    
    return (
      <fieldset>
        {dataInputs.map((input) => (
          <InputLabel key={input.id} input={input} handleChangeState={handleChangeState}/>
        ))}

        <select required onChange={handleChangeState} name="state">
          {states.map((state) => (
            <option key={state.ID} value={state.Sigla}> 
              {state.Nome}
            </option>
          ))}
        </select>

        {dataRadio.home.map((radio) => (
          <InputRadioLabel key={radio.id} radio={radio} handleChangeState={handleChangeState} />
        ))}
      </fieldset>
    );
  }
}
