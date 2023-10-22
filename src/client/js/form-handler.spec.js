// use jest for testing
import "regenerator-runtime/runtime";
import { handleSubmit } from "./form-handler";

describe("handleSubmit() should be a function", () => {
  test("Should resolve to an error when url not valid ", async () => {
    jest
      .spyOn(document, "getElementById")
      .mockReturnValueOnce(document.createElement("input"));

    handleSubmit(new Event("click")).then((response) => {
      expect(response).toEqual({ error: "Please enter a valid url" });
    });
  });
});
