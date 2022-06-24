import styled, { css } from "styled-components";
import { ReactNode } from "react";

const StyledWrapper = styled.div<FlexWrapperInterface>`
  display: flex;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `};

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `};

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
`;

interface FlexWrapperInterface {
  children: ReactNode;
  padding?: string;
  gap?: string;
  width?: string;
  height?: string;
  justify?: "center" | "space-between";
  align?: "center";
}

export const FlexWrapper = ({
  children,
  justify,
  height,
  align,
  width,
  padding,
  gap,
}: FlexWrapperInterface) => {
  return (
    <StyledWrapper
      gap={gap}
      padding={padding}
      justify={justify}
      align={align}
      width={width}
      height={height}
    >
      {children}
    </StyledWrapper>
  );
};
