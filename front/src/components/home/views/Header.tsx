import styled from "styled-components";

// COMPONENTS
import { HeaderInput } from "components/home/sections";

const StyledWrapper = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};

  input {
    padding: 0.5rem;
  }
`;

export const Header = () => {
  return (
    <StyledWrapper>
      <HeaderInput />
    </StyledWrapper>
  );
};
