import { Link } from "react-router-dom";
import styled from "styled-components";

export const RankSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin: 5rem 0 1rem 0;
  }
  h1 {
    margin: 0.5rem 0 1rem 0;
  }
  h3 {
    color: #7b7b81;
    margin: 0.5rem 0 3rem 0;
  }
  table {
    text-align: center;
    font-weight: 500;
    border-collapse: collapse;
    thead {
      background: #33bd64;
      color: #ecf0ff;
      tr {
        th {
          padding: 1rem;
          border: 1px solid #ecf0ff;
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
  margin: 5rem 0;
  :hover {
    background-color: rgb(40, 149, 78);
  }
`;
