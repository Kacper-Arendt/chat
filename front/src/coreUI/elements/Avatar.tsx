import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

const sizeHandler = (size: SizeType) => {
  switch (size) {
    case "small":
      return "2rem";
    default:
      return "1rem";
  }
};

const StyledImage = styled.img<{ size: SizeType }>`
  width: ${({ size }) => sizeHandler(size)};
`;

const StyledIcon = styled(FaUserCircle)``;

type SizeType = "small" | "medium" | "large";

interface AvatarInterface {
  type: "small" | "medium" | "large";
  url: string | null;
  alt: string;
}

export const Avatar = ({ url, alt, type }: AvatarInterface) => {
  if (url && url?.length > 0)
    return <StyledImage src={url} alt={alt} size={type} />;

  return <StyledIcon type={type} size={sizeHandler(type)} />;
};
