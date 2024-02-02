import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputField.scss";

const InputField = ({
  name,
  type,
  onChangeHandler,
  label,
  placeHolder,
  isLabelHidden,
  inputValue,
  valueType,
  iconName,
  onClickHandler,
  inputRef,
}) => {
  return (
    <div className="inputfield">
      {iconName && (
        <FontAwesomeIcon icon={iconName} className="inputfield__icon" />
      )}
      <label
        htmlFor={`Input-${type}-${label}`}
        className={`inputfield__label ${isLabelHidden && "hidden"}`}
      >
        {label}
      </label>
      {type !== "textarea" && (
        <input
          className="inputfield__inputbox"
          type={type}
          name={name}
          id={`Input-${type}-${label}`}
          placeholder={placeHolder}
          value={inputValue}
          onChange={(e) => onChangeHandler(e, valueType)}
          ref={inputRef}
          onClick={onClickHandler}
        />
      )}
      {type === "textarea" && (
        <textarea
          className="inputfield__inputarea"
          id={`Input-${type}-${label}`}
          name={name}
          rows="4"
          cols="50"
          placeholder={placeHolder}
          value={inputValue}
          ref={inputRef}
          onChange={(e) => onChangeHandler(e, valueType)}
        ></textarea>
      )}
    </div>
  );
};

export default InputField;
