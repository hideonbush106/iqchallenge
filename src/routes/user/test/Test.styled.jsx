import styled from "styled-components";
import { Form } from "react-router-dom";
import { down } from "styled-breakpoints";
export const TestSection = styled.div`
  background: #f5f5f5;
  display: flex;
  padding-bottom: 1rem;
`;

export const TestForm = styled(Form)`
  width: 100%;
`;

export const FormArea = styled.div`
  width: 70%;
  margin-right: 4.5rem;
  float: right;
  ${down("md")} {
    margin: 0;
    display: flex;
    overflow: hidden;
    width: 100%;
    max-height: 100vh;
  }
`;

export const TestSectionMobile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const TestStatMobile = styled.div`
  background: #fff;
  position: fixed;
  z-index: 99;
  width: 100%;
  color: #919196;
  img {
    margin: 1rem auto;
  }
  div {
    margin: 1.15rem auto;
    padding-bottom: 1.15rem;
    border-bottom: 2px solid #eeeeee;
    display: flex;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    a {
      font-weight: 700;
      margin: 0 0.5rem;
      white-space: nowrap;
      padding: 0.5rem 1rem;
      /* background: #33bd64; */
      /* color: #fff; */
      border-radius: 99px;
      :visited {
        color: inherit;
        text-decoration: none;
      }
      :link {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  p {
    color: #BDBDBD;
    font-weight: 700;
    margin: 1rem 0 1rem 1rem;
  }
`;
