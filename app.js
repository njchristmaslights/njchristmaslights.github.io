const quoteForm = document.querySelector('#quote-form');
// Standard navigation avoids cross-origin AJAX failures from the provider.
quoteForm.addEventListener('formdata', ({formData}) => {
  const areas = formData.getAll('lighting_areas');
  formData.delete('lighting_areas');
  formData.set('lighting_areas', areas.join(', ') || 'Not specified');
});
quoteForm.addEventListener('submit', () => {
  document.querySelector('#form-note').textContent = 'Submitting your quote request securely...';
});
