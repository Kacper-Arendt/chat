import { t } from "i18next";

// COMPONENTS
import { Input } from "coreUI/elements";
import { useField } from "hoc/hooks";
import styled from "styled-components";

const initialState = {
  searchText: "",
};

const StyledInputWrapper = styled.div`
  padding: 0 0.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
`;

export const HeaderInput = () => {
  const { fields, handleChange } = useField(initialState);

  return (
    <StyledInputWrapper>
      <Input
        name="searchText"
        type="text"
        bgColor="grey400"
        placeholder={t("search")}
        value={fields.searchText}
        onChange={handleChange}
      />
    </StyledInputWrapper>
  );
};
