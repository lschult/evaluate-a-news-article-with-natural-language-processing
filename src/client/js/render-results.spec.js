import "regenerator-runtime/runtime";
import { createEvaluationTemplate } from "./render-results";

describe("createEvaluationTemplate() should exist", () => {
  test("should create evaluation results template", () => {
    const template = createEvaluationTemplate({
      polarity: "polarity",
      subjectivity: "subjectivity",
      snippet: "snippet",
    });

    expect(template).toBe(
      `
  <div class="evaluation-results">
    <h3>Polarity:</h3>
    <p>polarity</p>
    <h3>Subjectivity:</h3>
    <p>subjectivity</p>
    <p class="snippet">snippet</p>
  </div>
  `
    );
  });
});
