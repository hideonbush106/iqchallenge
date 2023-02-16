import styled from "styled-components";
import { down } from "styled-breakpoints";
export const QuestionSection = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 12px;
  margin: 1rem 0 0 1rem;
  background: #fff;
  ${down("md")} {
    margin: 0;
    flex-direction: column;
    box-shadow: none;
    border: none;
    padding: 0;
    text-align: center;
    min-width: 100%;
    min-height: 100vh;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2.5rem;
  justify-content: center;
  height: 5rem;
  button {
    display: flex;
    ${down("md")} {
      width: fit-content;
      font-size: 1.5rem;
      background: none;
      color: #33bd64;
      font-weight: 500;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }
`;
