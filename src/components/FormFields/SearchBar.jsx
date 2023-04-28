const SearchBar = ({ value, onChange, type, title, ...props }) => {
  return (
    <div className="flex justify-between items-center">
      <label className="">{title}</label>
      <input
        className="text-black text-base"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
