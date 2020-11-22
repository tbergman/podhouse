import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import { Input, Button, Link, Text } from "@chakra-ui/react";

import {
  AuthTextContainer,
  AuthFormContainer,
  AuthLinksContainer,
  AuthCircle,
} from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

import UserSignInWithEmail from "./UserSignInWithEmail";
import {
  UserSignInWithEmailMutation,
  UserSignInWithEmailMutationResponse,
} from "./__generated__/UserSignInWithEmailMutation.graphql";

import { updateToken } from "src/utils/auth";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const [, , handleAuth, send] = useAuthContext();
  const [userSignInWithEmail, isPending] = useMutation<
    UserSignInWithEmailMutation
  >(UserSignInWithEmail);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    formState,
    getValues,
  } = useForm<SignInFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userSignInWithEmail({
      variables: {
        input: {
          email: getValues().email,
          password: getValues().password,
        },
      },
      onCompleted: ({
        UserSignInWithEmail,
      }: UserSignInWithEmailMutationResponse) => {
        if (UserSignInWithEmail.error) {
          const error = UserSignInWithEmail.error;

          if (error === "Invalid password") {
            setError("password", {
              type: "manual",
              message: error,
            });
          } else if (error === "Account with this email address not found") {
            setError("email", {
              type: "manual",
              message: error,
            });
          } else {
            setError("email", {
              type: "manual",
              message: error,
            });
            setError("password", {
              type: "manual",
              message: error,
            });
          }
          return;
        }

        updateToken(UserSignInWithEmail.token);
        handleAuth();
      },
    });
  };

  return (
    <>
      <AuthTextContainer>
        <Text>
          Listen to your favorite podcasts
        </Text>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          ref={register}
          error={errors.email?.message}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          ref={register}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          isDisabled={!formState.isValid || formState.isSubmitting || isPending}
        >
          Sign in
        </Button>

        <AuthLinksContainer>
          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNUP")}
          >
            Don't have an account?
          </Link>

          <AuthCircle />

          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("FORGOT")}
          >
            Forgot your password?
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default SignIn;
