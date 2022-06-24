import styled from "styled-components";

// COMPONENTS
import { Avatar } from "coreUI/elements";

const StyledRoomListItem = styled.div`
  display: flex;
  column-gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius[1]};

  :first-of-type {
    margin-top: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.grey200};
  }
`;

interface RoomListItemInterface {
  id: string;
  image: string | null;
  name: string;
}

export const RoomListItem = ({ id, image, name }: RoomListItemInterface) => {
  const openRoom = () => console.log(id);

  return (
    <StyledRoomListItem key={id} onClick={openRoom}>
      <Avatar url={image} alt={name} type="small" />
      <div>{name && name}</div>
    </StyledRoomListItem>
  );
};
