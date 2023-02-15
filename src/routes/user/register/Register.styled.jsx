import styled from "styled-components";
import { Form } from "react-router-dom";
import { down } from "styled-breakpoints";

const LogoMobile = styled.img`
  display: none;

  ${down("md")} {
    padding: 2rem 0;
    display: flex;
    justify-self: start;
  }
`;

const RegisterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${down("md")} {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
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
  ${down("md")} {
    padding: 0 2rem 5rem 2rem;
    img {
      display: none;
    }
    p {
      text-align: justify;
    }
    h1 {
      text-align: center;
      font-size: 1.5rem;
      width: 100%;
    }
  }
`;

const FormArea = styled(Form)`
  width: 100%;
`;

const RegisterTheme = styled.img`
  max-width: 50%;
  padding: 0 5rem;
  ${down("md")} {
    padding: 0 2rem;
    max-width: 100%;
  }
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

const Input = styled.input`
  &:focus {
    outline: none;
  }
  font-size: 1rem;
  margin-left: 0.5rem;
  width: 100%;
  overflow: hidden;
  height: 1.25rem;
  background: #eeeeee !important;
  border: none;
  ${down("md")} {
    font-size: 1rem;
  }
`;

const StartButton = styled.button`
  background: #33bd64;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  transition: all 0.25s ease;
  :hover {
    background-color: rgb(40, 149, 78);
  }
  ${down("md")} {
    font-size: 1.2rem;
  }
`;

export {
  RegisterSection,
  RegisterForm,
  RegisterTheme,
  StartButton,
  InputArea,
  FormArea,
  Input,
  LogoMobile,
};
