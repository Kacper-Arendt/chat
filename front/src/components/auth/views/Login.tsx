import { SyntheticEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HiCursorClick } from "react-icons/hi";

import { LoginCredentials, useLoginMutation } from "redux/slices/user";
import { useField } from "hoc/hooks";
import { Form } from "components/auth/sections";

// REDUX
import { useAppDispatch } from "redux/hooks";
import { userLogin } from "redux/slices/user";

// COREUI
import { Input, ButtonType1, Link } from "coreUI/elements";

const initialState: LoginCredentials = {
  email: "",
  password: "",
};

export const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { fields, handleChange } = useField(initialState);
  const navigate = useNavigate();
  const [login, { data, isSuccess, isLoading, error }] = useLoginMutation();

  const onSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await login(fields);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (isSuccess && data) {
      const { token, id, username } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      dispatch(userLogin({ username, id }));

      navigate("/");
    }
  }, [isSuccess]);

  return (
    <Form
      handleFormSubmit={onSubmitHandler}
      headerText={t("form.signIn")}
      error={error}
    >
      <Input
        name="email"
        value={fields.email}
        onChange={handleChange}
        placeholder={t("form.email")}
        minLength={5}
        required
        autoComplete="on"
        autoFocus
      />
      <Input
        name="password"
        value={fields.password}
        onChange={handleChange}
        type={"password"}
        placeholder={t("form.password")}
        minLength={5}
        required
        autoComplete="on"
      />
      <ButtonType1 onClick={() => {}} type="submit" loading={isLoading}>
        {t("form.login")}
      </ButtonType1>
      <Link path="/register">
        {t("form.dontHaveAccount")} <HiCursorClick />
      </Link>
    </Form>
  );
};
