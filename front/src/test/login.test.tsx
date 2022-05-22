import { fireEvent, render, screen } from "@testing-library/react";
import { RouterWrapper } from "./test-utils";
import { Login } from "../routes";

describe("renders the Login page", () => {
  render(
    <RouterWrapper>
      <Login />
    </RouterWrapper>
  );
  expect(screen.getByRole("heading")).toHaveTextContent(/Sign in/);

  test("email input", () => {
    const inputEmail = screen.getByPlaceholderText("E-mail");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute("type", "text");
    expect(inputEmail).toHaveAttribute("minLength", "5");
    expect(inputEmail).toHaveAttribute("required");
    expect(inputEmail).toHaveAttribute("autoComplete", "on");
    expect(inputEmail).toHaveAttribute("value", "");

    fireEvent.input(inputEmail, { target: { value: "12345" } });
    expect(inputEmail).toHaveAttribute("value", "12345");
  });

  const inputPassword = screen.getByPlaceholderText("Password");
  expect(inputPassword).toHaveAttribute("type", "password");
  expect(inputPassword).toHaveAttribute("minLength", "5");
  expect(inputPassword).toHaveAttribute("required");
  expect(inputPassword).toHaveAttribute("autoComplete", "on");
  expect(inputPassword).toHaveAttribute("value", "");

  fireEvent.input(inputPassword, { target: { value: "12345" } });
  expect(inputPassword).toHaveAttribute("value", "12345");

  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("type", "submit");
  fireEvent.click(button);

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/register");
});
