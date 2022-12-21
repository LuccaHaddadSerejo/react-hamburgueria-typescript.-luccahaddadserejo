import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegisterFull = styled.div`
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

    section {
      width: 100%;

      form {
        @media (min-width: 800px) {
          min-width: 450px;
        }
      }

      button {
        margin-top: 15px;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      flex-direction: row;
      position: relative;
      bottom: 50px;
      gap: 40px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-weight: var(--weight3);
  font-size: var(--font-size6);
  text-decoration: underline;
  color: #828282;
  &:hover {
    color: var(--color-gray100);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-weight: var(--weight1);
    font-size: var(--font-size4);
    color: #333333;
  }
`;

export const StyledError = styled.p`
  margin-top: 10px;
  color: red;
`;
