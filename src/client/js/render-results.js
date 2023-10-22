function updateResultsHTML(innerHTML = "") {
  const resultContainer = document.querySelector(".results-section");
  resultContainer.innerHTML = innerHTML;
}

export function clearResults() {
  updateResultsHTML("");
}

export function showErrorMessage(errorMessage = "") {
  const errorHTML = `<div class="result-error">${errorMessage}</div>`;

  updateResultsHTML(errorHTML);
}

export function createEvaluationTemplate(results = {}) {
  const { polarity, subjectivity, snippet } = results;

  return `
  <div class="evaluation-results">
    <h3>Polarity:</h3>
    <p>${polarity}</p>
    <h3>Subjectivity:</h3>
    <p>${subjectivity}</p>
    <p class="snippet">${snippet}</p>
  </div>
  `;
}

export function showEvaluationResults(results = {}) {
  const template = createEvaluationTemplate(results);

  updateResultsHTML(template);
}
