import React from "react";
import { Field, FieldProps, Formik } from "formik";
import { Button, Form, Header, Input, TextArea } from "semantic-ui-react";
import AddressFields from "../../shared/formcomponents/AddressFields";
import ErrorMessage from "../../shared/formcomponents/ErrorMessage";
import { validate } from "./validation";
import "./IncidentForm.css";
import apdLogo from "../../shared/images/apd-logo.png";

export interface IncidentFormValues {
  title: string;
  details: string;
  date: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  postcode: string;
}

const initialFormValues: IncidentFormValues = {
  title: "",
  details: "",
  date: "",
  addressLine1: "",
  addressLine2: "",
  town: "",
  postcode: "",
};

interface Props {
  submitForm?: (values: IncidentFormValues) => void;
}

function IncidentForm({ submitForm }: Props) {
  return (
    <div className="IncidentForm">
      <div className="IncidentForm__header">
        <img src={apdLogo} className="IncidentForm__header-logo" alt="logo" />
        <Header as="h1">Incident Form</Header>
      </div>

      <div className="IncidentForm__formcontainer">
        <Formik
          initialValues={initialFormValues}
          validate={(values) => validate(values)}
          onSubmit={(values, { setSubmitting }) => {
            if (submitForm) {
              submitForm(values);
            }

            // just display the values in an alert for testing purposes
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, isSubmitting, handleReset }) => (
            <Form onSubmit={handleSubmit} className="IncidentForm__form">
              <Form.Field>
                <label htmlFor="title">Title</label>
                <Field name="title">
                  {({ field }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="Please enter a title..."
                      maxLength="70"
                      id="title"
                    />
                  )}
                </Field>
                <ErrorMessage name="title" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="details">Details</label>
                <Field name="details">
                  {({ field }: FieldProps) => (
                    <TextArea
                      {...field}
                      placeholder="Please enter the details..."
                      rows={5}
                      id="details"
                    />
                  )}
                </Field>
                <ErrorMessage name="details" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="date">Date and Time</label>
                <Field name="date">
                  {({ field }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder={"DD/MM/YYYY HH:MM"}
                      maxLength="16"
                      id="date"
                    />
                  )}
                </Field>
                <ErrorMessage name="date" />
              </Form.Field>

              <AddressFields />

              <div className="IncidentForm__submit">
                <Button secondary disabled={isSubmitting} onClick={handleReset}>
                  Cancel
                </Button>
                <Button primary type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default IncidentForm;
