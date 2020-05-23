import { FormikErrors } from "formik";
import { IncidentFormValues } from "./IncidentForm";

export const validate = (values: IncidentFormValues) => {
  const errors: FormikErrors<IncidentFormValues> = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.details) {
    errors.details = "Details are required";
  }

  if (!values.date) {
    errors.date = "Date and Time is required";
  } else if (!/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/i.test(values.date)) {
    errors.date = "Invalid date time format please use DD/MM/YYYY HH:MM";
  }

  if (!values.addressLine1) {
    errors.addressLine1 = "Address Line 1 is required";
  }

  if (!values.town) {
    errors.town = "Town is required";
  }

  if (!values.postcode) {
    errors.postcode = "Postcode is required";
  }

  return errors;
};
