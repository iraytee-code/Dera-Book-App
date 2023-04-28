const SearchBar = ({ value, onChange, type, title, ...props }) => {
  return (
    <div className="my-3">
      <label>{title}</label>
      <input
        className="text-black"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
