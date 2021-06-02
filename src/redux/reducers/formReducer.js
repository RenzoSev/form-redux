import { INITIAL_STATE } from '../../services/data';

import { CLEAR_FORM } from '../actions/clearForm';
import { SUBMIT_FORM } from '../actions/submitForm';

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return { ...action.payload };
    case CLEAR_FORM:
        return INITIAL_STATE;
    default:
      return state; 
  }
}

export default formReducer;
