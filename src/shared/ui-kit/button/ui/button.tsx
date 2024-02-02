import { css } from "@style/css";
import { ButtonHTMLAttributes, memo } from "react";

const rootStyle = css({
  p: "10px 15px",
  border: "1px solid #ccc",
  rounded: '2px',
  cursor: 'pointer',
  transition: 'all',
  _hover: {
    bg: '#ddd',
  },
  _active: {
    bg: 'transparent',
  }
});

export const Button = memo<ButtonHTMLAttributes<HTMLButtonElement>>((props) => (
  <button {...props} className={rootStyle} />
));
