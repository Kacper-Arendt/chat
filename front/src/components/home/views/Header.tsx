import styled from "styled-components";

// COMPONENTS
import { HeaderInput, ChatRooms } from "components/home/sections";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  input {
    padding: 0.5rem;
  }
`;

export const Header = () => {
  return (
    <StyledWrapper>
      <HeaderInput />
      <ChatRooms />
    </StyledWrapper>
  );
};
