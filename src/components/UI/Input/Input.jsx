import { StyledInput } from '../Input/Input.styled';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
