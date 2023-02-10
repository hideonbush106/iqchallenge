import React from "react";

export const Question = (props) => {
  const question = props.question;

  if (question.isLong) {
    return (
      <div>
        <h1>{props.questionIndex + 1}</h1>
        {question.question.map((title, index) => {
          // map cho cau hoi
          if (title.match("/images/"))
            return (
              <div key={index}>
                <img src={title} alt="" />
              </div>
            );
          else
            return (
              <div key={index}>
                <p>{title}</p>
              </div>
            );
        })}
        {question.multipleChoice.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={question._id}
              value={index + 1}
              onChange={props.handleChange}
            />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.questionIndex + 1}</h1>
        {question.question.map((title, index) => {
          if (title.match("/images"))
            return (
              <div key={index}>
                <img src={title} alt="" />
              </div>
            );
          else
            return (
              <div key={index}>
                <h1>{title}</h1>
              </div>
            );
        })}
        {question.multipleChoice.map((option, index) => (
          <div key={index}>
            <input type="radio" name={question._id} value={index + 1} />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
      </div>
    );
  }
};
// TODO: css lại câu hỏi
// TODO: làm mobile
