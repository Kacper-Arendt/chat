import { ReactNode } from "react";
import styled from "styled-components";

interface RouteWrapperProps {
  header: ReactNode;
  main: ReactNode;
  headerIcon?: ReactNode;
}

const StyledMain = styled.main`
  display: flex;

  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.header`
  border-right: 1px solid ${({ theme }) => theme.grey200};
  max-width: 4rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30%;
    max-width: 17rem;
  }
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.35rem;

  h1 {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem;

    h1 {
      display: block;
      font-size: 1.8rem;
      margin: 0;
      padding: 0;
    }
  }
`;

const StyledMainWrapper = styled.div``;

export const RouteWrapper = ({
  header,
  main,
  headerIcon,
}: RouteWrapperProps) => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHead>
          <h1>Chats</h1>
          {headerIcon && headerIcon}
        </StyledHead>
        {header}
      </StyledHeader>
      <StyledMainWrapper>{main}</StyledMainWrapper>
    </StyledMain>
  );
};
