import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Link } from "react-router-dom";

export const ResultSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  ${down("md")} {
    flex-direction: column;
    padding-bottom: 5rem;
  }
  
`;

export const LogoMobile = styled.img`
  display: none;

  ${down("md")} {
    padding: 2rem 0;
    display: flex;
    justify-self: start;
  }
`;

export const ResultTheme = styled.img`
  max-width: 50%;
  padding-left: 10rem;
  ${down("md")} {
    margin: 1.5rem 0;
    padding: 0;
    max-width: 60%;
  }
`;

export const ResultInfo = styled.div`
  min-width: 50%;
  color: #7b7b81;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 0 10rem;
  ${down("md")} {
    padding: 0 2rem;
    > img {
        display: none;
    }
    h1 {
        font-size: 1.5rem;
        text-align: center;
    }
  }
  h1 {
    color: #21222d;
    font-weight: 700;
    margin: 1rem 0 2.5rem 0;
  }
`;

export const UserStat = styled.div`
  width: 60%;
  margin-top: 1rem;
  ${down("md")} {
    width: 100%;
    div {
        padding:1rem 0.5rem !important;
    }
  }
  div {
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  1rem;
    font-weight: 500;
    border-top: 1px solid #e0e0e0;
    h3 {
      color: #33bd64;
      font-weight: 500;
    }
  }
`;

export const RankButton = styled(Link)`
  :link {
    text-decoration: inherit;
    color: #33bd64;
    cursor: pointer;
  }

  :visited {
    text-decoration: inherit;
    color: #33bd64;
    cursor: pointer;
  }
`;

export const ClubFanpage = styled.div`
  margin: 1rem 0;
  width: fit-content;
  ${down("md")} {
    > p{
        margin: 0.5rem 0 !important;
    }
  }
  > p {
    margin: 0.75rem 0;
    font-weight: 600;
  }
  a {
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 500;
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
    p {
      margin-left: 1rem;
      color: #7b7b81;
    }
  }
`;


