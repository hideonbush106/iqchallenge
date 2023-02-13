import React from "react";
import { QuestionTitleSection, ImgHolder } from "./QuestionTitle.styled";
const QuestionTitle = (props) => {
  const questionTitle = props.questionTitle;
  return (
    <QuestionTitleSection>
      <h4>Câu hỏi số {props.questionIndex + 1}</h4>
      {questionTitle.question.map((title, index) => {
        return (
          <div key={index}>
            {title.match("/images/") ? (
              <ImgHolder>
                <img src={title} alt="" />
              </ImgHolder>
            ) : (
              <>{questionTitle.isLong ? <p>{title}</p> : <h2>{title}</h2>}</>
            )}
          </div>
        );
      })}
    </QuestionTitleSection>
  );
};

export default QuestionTitle;
