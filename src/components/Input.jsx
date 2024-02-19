const Input = ({ label, name, value, placeholder, type, handleChange }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      {type === 'textarea' ? (
        <textarea
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          name={name}
          value={value}
          className="border py-2 px-3 rounded mt-1 block w-full"
        />
      ) : (
        <input
          onChange={(e) => handleChange(e)}
          type={type}
          name={name}
          value={value}
          className="border py-2 px-3 rounded mt-1 block w-full"
          placeholder={placeholder}
        />
      )}
    </label>
  );
};

export default Input;
