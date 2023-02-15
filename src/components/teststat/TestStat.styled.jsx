import styled from "styled-components";

export const TestStatSection = styled.div`
  position: fixed;
  width: 23%;
  float: left;
  background: #fff;
  margin-right: 1rem;
  height: 100%;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
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

export const Time = styled.div`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  div {
    width: 8rem;
    height: 8rem;
    border-radius: 99px;
    background: #e8f6ec;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
    p {
      color: #33bd64;
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
  p {
    color: #bdbdbd;
    margin: 1rem 0;
  }
  button {
    background: #33bd64;
    border-radius: 12px;
    padding: 0.75rem 2rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.25rem;
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

export const QuestionMap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2rem);
  gap: 1.25rem;
  h2 {
    grid-column: 1 / 6;
    text-align: center;
    margin-top: 1.5rem;
    font-weight: 600;
  }
`;

export const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 2.25rem;
`;

export const NavTo = styled.a`
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme};
  :link {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }

  :visited {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
`;
