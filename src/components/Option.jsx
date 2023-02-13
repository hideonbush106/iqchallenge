import React from "react";

const Option = (props) => {
  const options = props.options;
  return (
    <div>
      {options.multipleChoice.map((option, index) => (
        <div>
          <input
            key={index}
            id={`option${index + 1}`}
            type="radio"
            name={props.questionIndex}
            value={index + 1}
            onChange={props.handleChange}
            checked={index + 1 == props.formData[props.questionIndex].answer}
          />
          <label htmlFor={`option${index + 1}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Option;
