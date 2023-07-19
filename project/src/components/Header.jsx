/* eslint-disable react/prop-types */
import { Logo } from "./Logo";

export const Header = ({ children }) => {
  return (
    <header>
      <Logo color="#223e80" />
      {children}
    </header>
  );
};
