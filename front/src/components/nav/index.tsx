import styled from "styled-components";
import { AiOutlineWechat } from "react-icons/ai";
import { useTranslation } from "react-i18next";

// COREUI
import { Link } from "coreUI/Link";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-height: 3rem;
  padding: 0.35rem 1rem;

  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  border-top-left-radius: ${({ theme }) => theme.radius[3]};
  border-top-right-radius: ${({ theme }) => theme.radius[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 3rem;
    max-height: 100%;
    padding: 1rem 0.5rem;

    border-top-right-radius: 0;
    border-top-left-radius: ${({ theme }) => theme.radius[3]};
    border-bottom-left-radius: ${({ theme }) => theme.radius[3]};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  row-gap: 1rem;
`;

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <StyledAside>
      <StyledNav>
        <Link path="/" color="grey100" size={2} title={t("chats")}>
          <AiOutlineWechat />
        </Link>
      </StyledNav>
    </StyledAside>
  );
};
