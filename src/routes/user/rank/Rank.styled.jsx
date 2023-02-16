import { Link } from "react-router-dom";
import styled from "styled-components";
import { down } from "styled-breakpoints";
export const RankSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    margin: 5rem 0 1rem 0;
    ${down("md")} {
      margin-top: 2.5rem;
    }
  }
  h1 {
    margin: 0.5rem 0 1rem 0;
    text-align: center;
    ${down("md")} {
      font-size: 1.5rem;
    }
  }
  h3 {
    color: #7b7b81;
    margin: 0.5rem 0 3rem 0;
    text-align: center;
  }
  text-align: center;
  table {
    ${down("md")} {
      font-size: 0.75rem;
    }
    ${down("sm")} {
      margin: 0 0.25rem 5rem 0.25rem !important;
    }
    text-align: center;
    font-weight: 500;
    border-collapse: collapse;
    margin: 0 4rem 10rem 4rem;
    thead {
      background: #33bd64;
      color: #ecf0ff;
      tr {
        th {
          padding: 1rem;
          border: 1px solid #ecf0ff;
          ${down("md")} {
            padding: 1rem 0.5rem;
          }
          ${down("sm")} {
            padding: 1rem 0.1rem;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 1rem 2rem;
          border-bottom: 1px solid #ecf0ff;
          background: #fff;
          color: #2b3c5f;
          ${down("md")} {
            padding: 1rem 0.5rem;
          }
          ${down("sm")} {
            padding: 1rem 0.1rem;
          }
        }
      }
    }
  }
`;

export const Home = styled(Link)`
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
  transition: all 0.25s ease;
  margin-bottom: 3rem;
  :hover {
    background-color: rgb(40, 149, 78);
  }
  ${down("md")} {
    font-size: 1rem;
  }
`;
