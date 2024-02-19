const Button = ({ label, type, variant, onClick = () => {} }) => {
  let style;

  switch (variant) {
    case 'secondary':
      style = 'bg-[#ffffffcb]';
      break;
    default:
      style = 'bg-[#fce477]';
      break;
  }
  return (
    <button
      onClick={onClick}
      data-testid="btn"
      type={type}
      className={`border font-[500] text-md text-[#000000a1] my-2 py-2 px-2 rounded ${style}`}
    >
      {label}
    </button>
  );
};

export default Button;
