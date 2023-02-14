import styled from "styled-components";

export const TestStatSection = styled.div`
  width: 30%;
  background: #fff;
  margin-right: 1rem;
  height: 100%;
`;

export const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  img {
    margin: 1rem 0;
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex-direction: column;

  p {
    color: #bdbdbd;
    margin: 2rem 0;
  }
  button {
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
    text-align: center;
    width: 70%;
    transition: all 0.25s ease;
  }
  button:hover {
    background-color: rgb(40, 149, 78);
  }
`;
