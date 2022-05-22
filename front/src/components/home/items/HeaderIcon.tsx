import { IconButton } from "coreUI/elements";
import { IoCreateOutline } from "react-icons/io5";
import { t } from "i18next";

export const HeaderIcon = () => {
  return (
    <IconButton onClick={() => {}} title={t("chat.newMessage")} size={1.75}>
      <IoCreateOutline />
    </IconButton>
  );
};
