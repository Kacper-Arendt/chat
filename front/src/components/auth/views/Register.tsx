import { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";

import { useField } from "hoc/hooks";
import { Form } from "components/auth/sections";
import { RegisterCredentials, useRegisterMutation } from "redux/slices/user";

// coreUI
import { Input } from "coreUI/form";
import { ButtonType1 } from "coreUI/button";
import { Link } from "coreUI/Link";

const initialState: RegisterCredentials = {
  email: "",
  password: "",
  username: "",
};

export const Register = () => {
  const { t } = useTranslation();
  const { fields, handleChange } = useField(initialState);
  const [register, { isLoading, error }] = useRegisterMutation();

  const onSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await register(fields);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form
      handleFormSubmit={onSubmitHandler}
      headerText={t("form.signUp")}
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
        name="username"
        value={fields.username}
        onChange={handleChange}
        placeholder={t("form.username")}
        minLength={2}
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
      <ButtonType1 loading={isLoading} onClick={() => {}} type="submit">
        {t("form.register")}
      </ButtonType1>
      <Link path="/login">{t("form.haveAccount")}</Link>
    </Form>
  );
};
