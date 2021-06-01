export const SUBMIT_FORM = 'SUBMIT_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});

export const clearForm = () => ({
  type: CLEAR_FORM
});
