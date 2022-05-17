import styled from "styled-components";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";

import { getErrorMessage } from "hoc/ErrorHandling";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 100%;
  min-width: 20rem;
  row-gap: 1.5rem;
  padding: 3rem 2rem;
  max-width: 25rem;
  background-color: ${({ theme }) => theme.base};
  ${({ theme }) => theme.shadow};
  background: radial-gradient(at right bottom, #9c27b0, #ff9800);
`;

const StyledError = styled.span`
  color: ${({ theme }) => theme.danger};
  margin: -2.75rem 0 0;
`;

interface FormProps {
  children: ReactNode;
  handleFormSubmit: (e: SyntheticEvent) => void;
  headerText: string;
  error: FetchBaseQueryError | SerializedError | undefined | string;
}

export const Form = ({
  children,
  handleFormSubmit,
  headerText,
  error,
}: FormProps) => {
  const [err, setErr] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (error) {
      const err = getErrorMessage(error);
      setErr(err.data?.error);
      setTimeout(() => {
        setErr(undefined);
      }, 5000);
    }
  }, [error]);

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <h1>{headerText}</h1>
        {err && <StyledError>{err}</StyledError>}
        {children}
      </StyledForm>
    </StyledWrapper>
  );
};
