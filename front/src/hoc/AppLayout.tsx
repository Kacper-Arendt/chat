import { Outlet } from "react-router-dom";
import styled from "styled-components";

// COMPONENTS
import { Nav } from "components/nav";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 70rem;
  max-height: 40rem;
  margin: 1rem;

  ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius[3]};
  border: 1px solid ${({ theme }) => theme.grey600};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const AppLayout = () => {
  return (
    <StyledWrapper>
      <Nav />
      <Outlet />
    </StyledWrapper>
  );
};
