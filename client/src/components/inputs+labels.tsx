import { FormHelperText, Input } from "@chakra-ui/react";
import e from "express";
import React, { useState, useEffect } from "react";

type InputType = {
  inputType: string;
  value: string;
  fieldCategory: string;
  updateState: (field: string, value: string) => void;
};
export const AuthFormInput: React.FC<InputType> = ({
  inputType,
  value,
  updateState,
  fieldCategory,
}) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    updateState(fieldCategory, newValue);
  };

  return (
    <Input
      type={inputType}
      mb="45px"
      h="35px"
      borderRadius={8}
      backgroundColor="#cbe0e8"
      color="black"
      textIndent="5px"
      value={value}
      onChange={onChange}
    />
  );
};

type LabelName = {
  labelName: string;
};
export const AuthFormLabel: React.FC<LabelName> = (props: LabelName) => {
  return (
    <FormHelperText letterSpacing="3px" mb="10px" w="60%" color="white">
      {props.labelName}
    </FormHelperText>
  );
};
