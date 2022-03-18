import styled from "@emotion/styled";
import "@fontsource/open-sans";

export type ButtonProps = {
  children: React.ReactNode;
  colorScheme?:
    | "red"
    | "blue"
    | "purple"
    | "cyan"
    | "green"
    | "yellow"
    | "brick";
  variant?: "solid" | "outline" | "ghost" | "link"; //"primary" | "secondary" | "success" | "error" | "info" | "warn" ;
};

const colors = {
  red: "#ED0331",
  blue: "#3470E4",
  purple: "#6E71CC",
  cyan: "#1A9FBD",
  green: "#6FCD9E",
  yellow: "#FFDB66",
  brick: "#CC926E",
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: auto;
  border-radius: 0.2rem;
  padding: 8px 16px;
  font-family: "Open Sans", sans-serif;
  /* custom theming: */
  color: ${(props) =>
    props.variant === "outline"
      ? props.colorScheme
        ? colors[props.colorScheme]
        : colors["red"]
      : "white"};
  border: ${({ variant, colorScheme }) =>
    variant === "outline"
      ? `1px solid ${colorScheme ? colors[colorScheme] : colors["red"]}`
      : "none"};
  background-color: ${(props) =>
    `${
      props.variant === "outline"
        ? "transparent"
        : props.colorScheme
        ? colors[props.colorScheme]
        : colors["red"]
    }`};
`;

Button.defaultProps = {
  colorScheme: "red",
};
