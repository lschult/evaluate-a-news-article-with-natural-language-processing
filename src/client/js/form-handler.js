import { isValidURL } from "./url-validation";

export function handleSubmit(event) {
  event.preventDefault();

  // Get user input
  const url = document.getElementById("url").value;

  // Validate url
  const inputIsValidURL = isValidURL(url);

  if (inputIsValidURL) {
    // Make the call to BE to evaluate the article
    return evaluateArticleFromURL(url);
  } else {
    // Return immediately an error based on the invalid input
    return Promise.resolve({ error: "Please enter a valid url" });
  }
}

function evaluateArticleFromURL(url) {
  const APIurl = "http://localhost:8080/api/article-evaluate";

  return fetch(APIurl, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((res) => res.json())
    .then((data) => {
      return { data };
    })
    .catch(() => {
      return Promise.resolve({ error: "Computer says NO, Try again later" });
    });
}
