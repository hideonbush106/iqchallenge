import { down } from "styled-breakpoints";
import styled from "styled-components";

export const QuestionTitleSection = styled.div`
  width: 60%;
  padding-right: 2rem;
  border-right: 1px solid #eee;
  h3 {
    color: #f9af0b;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  ${down("md")} {
    width: 100%;
    border: none;
    padding: 0;
    padding: 0 2rem;
    margin-top: 12rem;
    text-align: justify;
    h3 {
      display: none;
    }
  }
`;

export const ImgHolder = styled.div`
  width: 100%;
`;
