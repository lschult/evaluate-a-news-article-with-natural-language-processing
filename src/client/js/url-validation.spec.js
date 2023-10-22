import "regenerator-runtime/runtime";
import { isValidURL } from "./url-validation";

describe("function isValidURL()", () => {
  test("It should return true if url valid", () => {
    const url =
      "https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples";
    expect(isValidURL(url)).toEqual(true);
  });

  test("It should return false if url invalid", () => {
    const url = "htps://learn.meaningcloud.com/developers";
    expect(isValidURL(url)).toEqual(false);
  });
});
