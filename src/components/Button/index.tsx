import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer type="button" disabled={disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
