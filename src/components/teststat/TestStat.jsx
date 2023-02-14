import React from "react";
import { TestStatSection, LogoHolder, Submit } from "./TestStat.styled";
const TestStat = () => {
  return (
    <TestStatSection>
      <LogoHolder>
        <img src="/assets/logo2.svg" alt="" />
      </LogoHolder>
      <div>

      </div>
      <div>

      </div>
      <Submit>
        <button type="submit">Nộp bài</button>
        <p>Kiểm tra bài làm kĩ trước khi nộp</p>
      </Submit>
    </TestStatSection>
  );
};

export default TestStat;
