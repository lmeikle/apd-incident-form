import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import IncidentForm from "./IncidentForm";

describe("IncidentForm", () => {
  test("initializes the form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<IncidentForm />);

    expect(getByText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Please enter a title...")).toBeInTheDocument();
    expect(getByText("Details")).toBeInTheDocument();
    expect(
      getByPlaceholderText("Please enter the details...")
    ).toBeInTheDocument();
    expect(getByText("Date and Time")).toBeInTheDocument();
    expect(getByPlaceholderText("DD/MM/YYYY HH:MM")).toBeInTheDocument();

    expect(getByText("Address Line 1")).toBeInTheDocument();
    expect(getByText("Address Line 2")).toBeInTheDocument();
    expect(getByText("Town")).toBeInTheDocument();
    expect(getByText("Postcode")).toBeInTheDocument();
  });

  test("submits the form data correctly", async () => {
    const mockSubmitForm = jest.fn();

    const { getByText, getByLabelText } = render(
      <IncidentForm submitForm={mockSubmitForm} />
    );

    fireEvent.change(getByLabelText("Title"), {
      target: { value: "Car Crash" },
    });
    fireEvent.change(getByLabelText("Details"), {
      target: { value: "2 cars involved" },
    });
    fireEvent.change(getByLabelText("Date and Time"), {
      target: { value: "12/12/1980 12:00" },
    });
    fireEvent.change(getByLabelText("Address Line 1"), {
      target: { value: "Flat 1" },
    });
    fireEvent.change(getByLabelText("Address Line 2"), {
      target: { value: "Flower Street" },
    });
    fireEvent.change(getByLabelText("Town"), { target: { value: "London" } });
    fireEvent.change(getByLabelText("Postcode"), {
      target: { value: "NW5 9AH" },
    });

    act(() => {
      fireEvent.click(getByText("Submit"));
    });

    await wait(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        title: "Car Crash",
        details: "2 cars involved",
        date: "12/12/1980 12:00",
        addressLine1: "Flat 1",
        addressLine2: "Flower Street",
        town: "London",
        postcode: "NW5 9AH",
      });
    });
  });
});
