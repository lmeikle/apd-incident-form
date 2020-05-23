import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";
import { Label } from "semantic-ui-react";

interface Props {
  name: string;
}

const ErrorMessage = ({ name }: Props) => {
  return (
    <FormikErrorMessage name={name}>
      {(msg) => (
        <Label basic color="red" pointing>
          {msg}
        </Label>
      )}
    </FormikErrorMessage>
  );
};

export default ErrorMessage;
