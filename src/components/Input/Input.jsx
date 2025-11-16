import "./styles.css";

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input_wrapper">
        {label && <label htmlFor={name} className="input_label">{label}</label>}
    <input
      className="custom_input"
      name={name} 
      type={type}
      placeholder={placeholder}
      label={label}
    />
    </div>
  );
}

export default Input;