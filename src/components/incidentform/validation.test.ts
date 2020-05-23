import { validate } from "./validation";

describe("validate", () => {
  test("fails validation for required fields", () => {
    expect(
      validate({
        title: "",
        details: "",
        date: "",
        addressLine1: "",
        addressLine2: "",
        town: "",
        postcode: "",
      })
    ).toEqual({
      addressLine1: "Address Line 1 is required",
      date: "Date and Time is required",
      details: "Details are required",
      postcode: "Postcode is required",
      title: "Title is required",
      town: "Town is required",
    });
  });

  test("handles invalid data time input", () => {
    expect(
      validate({
        title: "foo",
        details: "foo",
        date: "abc",
        addressLine1: "foo",
        addressLine2: "foo",
        town: "foo",
        postcode: "foo",
      })
    ).toEqual({
      date: "Invalid date time format please use DD/MM/YYYY HH:MM",
    });
  });

  test("returns no errors when all field data is provided correctly", () => {
    expect(
      validate({
        title: "foo",
        details: "foo",
        date: "12/12/1980 12:00",
        addressLine1: "foo",
        addressLine2: "foo",
        town: "foo",
        postcode: "foo",
      })
    ).toEqual({});
  });
});
