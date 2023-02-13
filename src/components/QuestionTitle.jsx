import React from "react";

const QuestionTitle = (props) => {
  const questionTitle = props.questionTitle;
  return (
    <div>
      <h1>{props.questionIndex + 1}</h1>
      {questionTitle.question.map((title, index) => {
        return (
          <>
            {title.match("/images/") ? (
              <div key={index}>
                <img src={title} alt="" />
              </div>
            ) : (
              <>{questionTitle.isLong ? <p>{title}</p> : <h1>{title}</h1>}</>
            )}
          </>
        );
      })}
    </div>
  );
};

export default QuestionTitle;
