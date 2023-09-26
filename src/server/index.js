const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
const FormData = require("form-data");

const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

// API
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/test", function (req, res) {
  res.send(mockAPIResponse);
  // test error response
  // res.status(500).send();
});

const apiKEY = process.env.API_KEY;

app.post("/api/article-evaluate", async function (req, res) {
  const { url } = req.body ?? {};

  const formdata = new FormData();
  formdata.append("key", apiKEY);
  formdata.append("url", url);
  formdata.append("lang", "auto"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      requestOptions
    );
    const responseData = await response.json();

    const { status, ...evaluationReport } = responseData;

    if (Object.keys(evaluationReport).length > 0) {
      const { subjectivity, score_tag, sentence_list } = evaluationReport;

      const POLARITY_DICTIONARY = {
        "P+": "strong positive",
        P: "positive",
        NEU: "neutral",
        N: "negative",
        "N+": "strong negative",
        NONE: "without polarity",
      };

      const evaluationResult = {
        polarity: POLARITY_DICTIONARY[score_tag] ?? "unknown",
        subjectivity,
        snippet: sentence_list[0].text,
      };

      res.send(evaluationResult);
    } else {
      // TODO: Improve error handling
      res.status(500).send();
    }
  } catch {
    // TODO: Improve error handling
    res.status(500).send();
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("\x1b[36m%s\x1b[0m", `App listening on on port 8080`);
});
