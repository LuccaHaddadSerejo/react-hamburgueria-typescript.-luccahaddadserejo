import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLoginFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    min-height: 100vh;
  }

  main {
    max-width: 1500px;
    padding: 15px;
    border: 1px solid transparent;

    & > :nth-child(1) {
      & > :nth-child(2) {
        @media (max-width: 800px) {
          display: none;
        }
      }
    }

    & > :nth-child(2) {
      width: 100%;
      max-width: fit-content;

      form {
        & > p:nth-last-of-type(1) {
          text-align: center;
          font-weight: var(--weight4);
          font-size: var(--font-size6);
          color: #999999;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }

      h2 {
        font-weight: var(--weight1);
        font-size: var(--font-size4);
        color: var(--color-gray600);
      }

      button {
        margin-top: 15px;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row-reverse;
      position: relative;
      bottom: 50px;
      gap: 40px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius3);
  transition: 0.4s;
  width: 100%;
  height: 60px;
  background-color: var(--color-gray0);
  border: 1px solid var(--color-gray0);
  border-radius: var(--radius2);
  font-weight: var(--weight2);
  font-size: var(--font-size5);
  color: #999999;

  &:hover {
    background-color: #828282;
    border-color: #828282;
    color: var(--color-gray100);
  }
`;

export const StyledError = styled.p`
  margin-top: 10px;
  color: red;
`;
