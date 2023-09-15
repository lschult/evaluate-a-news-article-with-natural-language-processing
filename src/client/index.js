import { handleSubmit, testfunction } from "./js/formHandler";

import * as FormHandler from "./js/formHandler";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const form = document.getElementsByTagName("form")[0];

  if (form) {
    FormHandler.testfunction();
    form.addEventListener("submit", handleSubmit);
  } else {
    // TODO: HANDLE CASE
    console.log("NO FORM");
  }
});
