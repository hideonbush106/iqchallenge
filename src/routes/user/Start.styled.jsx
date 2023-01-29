import styled from "styled-components";

export const StartSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const StartTheme = styled.img`
  max-width: 50%;
  padding: 0 5rem 0 10rem;
`;

export const StartNote = styled.div`
  min-width: 50%;
  padding: 0 10rem 0 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    color: #21222d;
    font-weight: 700;
    margin: 1.25rem 0 2.5rem 0;
  }
  div {
    display: flex;
    align-items: center;
    margin: 0.3rem 0;

    img {
      margin-right: 0.75rem;
    }
  }
`;

export const StartButton = styled.button`
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
  margin: 2rem 0;
`;
