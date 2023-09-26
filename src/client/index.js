import * as FormHandler from "./js/form-handler";
import * as RenderResults from "./js/render-results";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementsByTagName("form")[0];

  if (form) {
    form.addEventListener("submit", (event) => {
      RenderResults.clearResults();

      FormHandler.handleSubmit(event).then((result) => {
        const { error, data } = result;

        if (error) {
          RenderResults.showErrorMessage(error);
        } else if (data) {
          RenderResults.showEvaluationResults(data);
        }
      });
    });
  } else {
    // TODO: HANDLE CASE
    throw Error("form not found");
  }
});
