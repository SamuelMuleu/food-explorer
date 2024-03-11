import Container from "./style";

export function Input({
  label,
  svg,
  placeholder,
  type,
  accept,
  list,
  onChange,
  value,
  image
}) {

  return (
    <Container>
      <div className="input-container">
        {svg && <div className="svg-container">{svg}</div>}
      </div>
      <label htmlFor="form">{label}</label>
      <input
        value={value}
        onChange={onChange}
        list={list}
        accept={accept}
        placeholder={placeholder}
        type={type}
        image={image}
      />
    </Container>
  );
}

export default Input;
