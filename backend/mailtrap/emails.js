import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email Sent Successfully", response);
  } catch (error) {
    console.log(`Error sending verification email:`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "2e7ec69a-7bcc-4c8e-a575-713f758493be",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });

    console.log("Welcome Email Sent Successfully", response);
  } catch (error) {
    console.log(`Error Sending Welcome Email Sent Successfully:`, error);

    throw new Error(`Error Sending Welcome Email Sent Successfully: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
      category: "Password Reset",
    });
    console.log("Password reset link sent successfully", response);
  } catch (error) {
    console.log(`Error Sending Password Reset Email :`, error);

    throw new Error(`Error Sending Password Reset Email : ${error}`);
  }
};

export const resetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Update your password",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Updated",
    });
    console.log("Password updated successfully", response);
  } catch (error) {
    console.log(`Error in password updating :`, error);

    throw new Error(`Error in password updating : ${error}`);
  }
};
