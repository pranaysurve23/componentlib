import React from "react";

export interface InputProps {
  placeholder: string;
  type : string;
}

const InputText = (props: InputProps) => {
  return <input placeholder={props.placeholder} type={props.type} />;
};

export default InputText;