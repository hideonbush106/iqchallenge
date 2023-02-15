import React, { useEffect, useState } from "react";
import {
  TestStatSection,
  LogoHolder,
  Submit,
  QuestionMap,
  Map,
  NavTo,
  Time,
} from "./TestStat.styled";
const TestStat = (props) => {
  const navTo = props.navTo;

  const theme = {
    isCheck: "#33bd64 !important",
    isNotCheck: "#bdbdbd !important",
  };

  const questionID = [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
    "question-7",
    "question-8",
    "question-9",
    "question-10",
    "question-11",
    "question-12",
    "question-13",
    "question-14",
    "question-15",
  ];

  return (
    <TestStatSection>
      <LogoHolder>
        <img src="/assets/logo2.svg" alt="" />
      </LogoHolder>
      <Time>
        <h2>Thời gian</h2>
        <div>
          <p>{props.time}</p>
        </div>
      </Time>
      <Map>
        <QuestionMap>
          <h2>Câu hỏi</h2>
          {questionID.map((value, index) => (
            <NavTo
              theme={navTo[index].answer ? theme.isCheck : theme.isNotCheck}
              key={index}
              href={`#${value}`}
            >
              {index + 1}
            </NavTo>
          ))}
        </QuestionMap>
      </Map>
      <Submit>
        <button type="submit">Nộp bài</button>
        <p>Kiểm tra bài làm kĩ trước khi nộp</p>
      </Submit>
    </TestStatSection>
  );
};

export default TestStat;
