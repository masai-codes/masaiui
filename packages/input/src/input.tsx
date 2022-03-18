import styled from "@emotion/styled";
import "@fontsource/open-sans";

export type InputProps = {
  isInvalid?: boolean;
  capacity?: "xs" | "sm" | "md" | "lg";
  placeholder?: "string";
};

const sizes = {
  xs: "1.5rem",
  sm: "2rem",
  md: "2.5rem",
  lg: "3rem",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
};

const paddingSizes = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1rem",
};

export const Input = styled.input<InputProps>`
  color: black;
  border: 1px solid green;
  border-radius: 0.375rem;
  /* padding: 2px; */
  width: 100%;
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  font-size: ${(props) => fontSizes[props.capacity]};
  padding-inline-end: ${(props) => paddingSizes[props.capacity]};
  padding-inline-start: ${(props) => paddingSizes[props.capacity]};
  height: ${(props) => sizes[props.capacity]};
  font-family: "Open Sans", sans-serif;
  ::placeholder {
    color: gray;
  }
`;

Input.defaultProps = {
  isInvalid: false,
  capacity: "md",
  placeholder: "Enter Text",
};
