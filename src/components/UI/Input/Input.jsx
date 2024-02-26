import { StyledInput } from '../Input/Input.styled';

const Input = ({ type, placeholder, value, onChange, className, name }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      name={name}
    />
  );
};

export default Input;
