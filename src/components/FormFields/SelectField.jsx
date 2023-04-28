const SelectField = ({ data, value, onChange, title, ...props }) => {
  return (
    <>
      <div className="flex justify-between items-center  xs:w-full md:w-auto">
        <div className="pr-3">{title}</div>
        <select
          className="text-black p-2"
          value={value}
          onChange={onChange}
          {...props}>
          {data?.map((value, index) => (
            <option key={index + 1} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectField;
