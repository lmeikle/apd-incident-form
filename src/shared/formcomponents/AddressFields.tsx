import React from "react";
import { Form, Header, Input } from "semantic-ui-react";
import { Field, FieldProps } from "formik";
import ErrorMessage from "./ErrorMessage";

const AddressFields = () => {
  return (
    <>
      <Header as="h4" dividing={true}>
        Location
      </Header>
      <Form.Field>
        <label htmlFor="addressLine1">Address Line 1</label>
        <Field name="addressLine1">
          {({ field }: FieldProps) => (
            <Input {...field} maxLength="255" id="addressLine1" />
          )}
        </Field>
        <ErrorMessage name="addressLine1" />
      </Form.Field>
      <Form.Field>
        <label htmlFor="addressLine2">Address Line 2</label>
        <Field name="addressLine2">
          {({ field }: FieldProps) => (
            <Input {...field} maxLength="255" id="addressLine2" />
          )}
        </Field>
        <ErrorMessage name="addressLine2" />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field>
          <label htmlFor="town">Town</label>
          <Field name="town">
            {({ field }: FieldProps) => (
              <Input {...field} maxLength="35" id="town" />
            )}
          </Field>
          <ErrorMessage name="town" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="postcode">Postcode</label>
          <Field name="postcode">
            {({ field }: FieldProps) => (
              <Input {...field} maxLength="8" id="postcode" />
            )}
          </Field>
          <ErrorMessage name="postcode" />
        </Form.Field>
      </Form.Group>
    </>
  );
};

export default AddressFields;
