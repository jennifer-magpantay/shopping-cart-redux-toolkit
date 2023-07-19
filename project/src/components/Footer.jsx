import { Confetti } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer>
      <small>
        Developed with fun by Jennifer Magpantay{" "}
        <Confetti size={18} color="#fafafa" />
      </small>
      <small>
        Design inspiration from{" "}
        <a
          href="https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Musemind UI/UX Agency
        </a>
      </small>
    </footer>
  );
};
