import styled from "styled-components";
import { Link } from "react-router-dom";

const Welcome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const WelcomeText = styled.p`
  text-align: center;
  color: #7b7b81;
  width: 55%;
  margin-bottom: 2rem;
`;

const WelcomeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StartButton = styled(Link)`
  background: #33bd64;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;
export { Welcome, WelcomeText, StartButton, WelcomeInfo };
