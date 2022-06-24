import { useGetRoomsQuery } from "redux/slices/chatRooms";
import { RoomListItem } from "components/home/elements";
import { FlexWrapper, Spinner } from "coreUI/elements";
import { useTranslation } from "react-i18next";

export const ChatRooms = () => {
  const { data, error, isLoading } = useGetRoomsQuery();
  const { t } = useTranslation();

  if (isLoading)
    return (
      <FlexWrapper justify="center" align="center" padding="1rem">
        <Spinner size={2} />
      </FlexWrapper>
    );

  if (error && "message" in error) return <p>{error?.message}</p>;

  if (data && data.length > 0) {
    return (
      <>
        {data.map(({ id, username, name, image }) => (
          <RoomListItem
            key={id}
            name={name ?? username}
            id={id}
            image={image}
          />
        ))}
      </>
    );
  }
  return <p>{t("chatRooms.notFound")}</p>;
};
