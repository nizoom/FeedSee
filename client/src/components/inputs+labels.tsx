import { FormHelperText, Input } from "@chakra-ui/react";
import React from "react";

type InputType = {
  inputType: string;
};
export const AuthFormInput: React.FC<InputType> = (props: InputType) => {
  return (
    <Input
      type={props.inputType}
      mb="45px"
      h="35px"
      borderRadius={8}
      backgroundColor="#cbe0e8"
      color="black"
      textIndent="5px"
    />
  );
};

type LabelName = {
  labelName: string;
};
export const AuthFormLabel: React.FC<LabelName> = (props: LabelName) => {
  return (
    <FormHelperText letterSpacing="3px" mb="10px" w="60%">
      {props.labelName}
    </FormHelperText>
  );
};
