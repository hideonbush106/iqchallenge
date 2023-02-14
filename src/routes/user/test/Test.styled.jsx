import styled from "styled-components";
import { Form } from "react-router-dom";

export const TestSection = styled.div`
  background: #f5f5f5;
  display: flex;
  padding-bottom: 1rem;
`;

export const TestForm = styled(Form)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const FormArea = styled.div`
  width: 70%;
  margin-right: 4.5rem;
`;
