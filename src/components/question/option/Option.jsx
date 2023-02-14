import React from "react";
import { Choices, OptionSection } from "./Option.styled";
const Option = (props) => {
  const choices = (i) => {
    switch (i) {
      case 1:
        return "A";
        break;
      case 2:
        return "B";
        break;
      case 3:
        return "C";
        break;
      case 4:
        return "D";
        break;
      case 5:
        return "E";
        break;
      default:
        break;
    }
  };

  const options = props.options;
  return (
    <OptionSection>
      {options.multipleChoice.map((option, index) => (
        <Choices key={index}>
          <input
            id={`option-${index + 1}-question-${props.questionIndex}`}
            type="radio"
            name={props.questionIndex}
            value={index + 1}
            onChange={props.handleChange}
            checked={index + 1 == props.formData[props.questionIndex].answer}
          />
          <label
            htmlFor={`option-${index + 1}-question-${props.questionIndex}`}
          >
            <h3>{choices(index + 1)}</h3>
            <h4>{option}</h4>
          </label>
        </Choices>
      ))}
    </OptionSection>
  );
};

export default Option;
