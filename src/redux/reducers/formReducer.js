import { CLEAR_FORM, SUBMIT_FORM } from '../actions';

const INITIAL_STATE = {
  renderDiv: false,
  nome: '',
  email: '',
  cpf: '',
  home: '',
  resume: '',
  job: '',
  jobDescription: '',
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return {...state, ...action.payload};
    case CLEAR_FORM:
        return INITIAL_STATE;
    default:
      return state; 
  }
}

export default formReducer;
