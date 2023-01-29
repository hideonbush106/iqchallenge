import styled from "styled-components";
import { Form } from "react-router-dom";

const RegisterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const RegisterForm = styled.div`
  min-width: 50%;
  color: #7b7b81;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 0 5rem 0 10rem;
  h1 {
    color: #21222d;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem 0;
  }
`;

const FormArea = styled(Form)`
  width: 100%;
`;

const RegisterTheme = styled.img`
  max-width: 50%;
  padding: 0 5rem;
`;

const InputArea = styled.div.attrs()`
  &:focus-within {
    outline: 1px solid #33bd64;
  }
  display: flex;
  background: #eeeeee;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 12px;
  width: 100%;
  margin: 2rem 0;
  transition: 0.25s linear;
`;

const Input = styled.input.attrs()`
  &:focus {
    outline: none;
  }
  margin-left: 0.5rem;
  width: 100%;
  overflow: hidden;
  height: 1.2rem;
  background: #eeeeee !important;
  border: none;
`;

const StartButton = styled.button`
  background: #33bd64;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`;

export {
  RegisterSection,
  RegisterForm,
  RegisterTheme,
  StartButton,
  InputArea,
  FormArea,
  Input,
};
