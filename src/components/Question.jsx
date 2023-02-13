import React from "react";
import Option from "./Option";
import QuestionTitle from "./QuestionTitle";

export const Question = (props) => {
  const question = props.question;

  return (
    <div>
      <QuestionTitle
        questionTitle={question}
        questionIndex={props.questionIndex}
      />
      <Option
        options={question}
        questionIndex={props.questionIndex}
        handleChange={props.handleChange}
        formData={props.formData}
      />
    </div>
  );
};
// TODO: css lại câu hỏi
// TODO: làm mobile
// TODO: lưu form data vào local
