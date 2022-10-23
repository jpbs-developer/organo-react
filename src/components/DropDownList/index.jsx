import "./DropDownList.css";
const DropDownList = (props) => {
  const selectItems = props.items;

  return (
    <div className="drop-down">
      <label>{props.label}</label>
      <select required={props.required}>
        {selectItems.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownList;
