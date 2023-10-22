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

async function evaluateArticleFromURL(url) {
  const APIurl = "http://localhost:8080/api/article-evaluate";

  try {
    const res = await fetch(APIurl, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    return { data };
  } catch {
    return await Promise.resolve({
      error: "Computer says NO, Try again later",
    });
  }
}
