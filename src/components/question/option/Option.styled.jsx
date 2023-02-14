import styled from "styled-components";

export const OptionSection = styled.div`
  width: 40%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-self: ;
  height: 100%;
  justify-content: space-between;
`;

export const Choices = styled.div`
  margin: 0.5rem 0;
  input[type="radio"] {
    display: none;
  }

  h3 {
    background: #fff;
    border-radius: 99px;
    width: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
  }

  h4 {
    margin-left: 1rem;
    font-weight: 600;
    max-width: 75%;
  }

  input:checked ~ label {
    background: #33bd64;
    transition: all 0.25s ease;
    color: white;
    h3 {
      color: #33bd64;
    }
  }

  label {
    transition: all 0.25s ease;
    background: #f5f5f5;
    padding: 0.5rem;
    border-radius: 42px;
    display: flex;
    align-items: center;
  }

  label:hover {
    background: #bdbdbd;
    cursor: pointer;
  }
`;
