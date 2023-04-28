const Button = ({ onClick, disabled, title }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-white text-black px-2 py-1 rounded">
      {title}
    </button>
  );
};

export default Button;
