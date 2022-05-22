import { t } from "i18next";

// COMPONENTS
import { Input } from "coreUI/elements";
import { useField } from "hoc/hooks";

const initialState = {
  searchText: "",
};

export const HeaderInput = () => {
  const { fields, handleChange } = useField(initialState);

  return (
    <Input
      name="searchText"
      type="text"
      bgColor="grey400"
      placeholder={t("search")}
      value={fields.searchText}
      onChange={handleChange}
    />
  );
};
