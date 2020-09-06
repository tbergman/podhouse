import * as React from "react";
import { withTranslation } from "i18n";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import { AuthTextContainer, AuthText, AuthFormContainer } from "../Auth.styles";

import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

interface ResetPasswordFormProps {
  newPassword: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          {t(
            "enter-your-email-address-and-we'll-send-you-an-email-with-a-password-reset-link",
          )}
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          name="newPassword"
          label={t("new-password")}
          placeholder={t("new-password")}
          height={40}
          ref={register}
          error={errors.newPassword?.message}
        />

        <Input
          type="password"
          name="confirmNewPassword"
          label={t("confirm-new-password")}
          placeholder={t("confirm-new-password")}
          height={40}
          ref={register}
          error={errors.confirmNewPassword?.message}
        />

        <Button type="submit" onClick={() => send("SUCCESS")} height={40}>
          {t("confirm-new-password")}
        </Button>
      </AuthFormContainer>
    </>
  );
};

ResetPassword.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ResetPassword);