import crypto from "crypto";

const COOKIE_NAME = "travelblack-auth";

function getSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error(
      "AUTH_SECRET is missing. Add AUTH_SECRET to your environment variables."
    );
  }

  return secret;
}

function createSignature(value: string) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(value)
    .digest("base64url");
}

export function createAuthToken(userId: string) {
  const encodedUserId = Buffer.from(
    userId,
    "utf8"
  ).toString("base64url");

  const signature =
    createSignature(encodedUserId);

  return `${encodedUserId}.${signature}`;
}

export function verifyAuthToken(
  token: string | undefined
) {
  if (!token) {
    return null;
  }

  try {
    const parts = token.split(".");

    if (parts.length !== 2) {
      return null;
    }

    const [
      encodedUserId,
      signature,
    ] = parts;

    const expectedSignature =
      createSignature(encodedUserId);

    const providedBuffer =
      Buffer.from(signature);

    const expectedBuffer =
      Buffer.from(expectedSignature);

    if (
      providedBuffer.length !==
      expectedBuffer.length
    ) {
      return null;
    }

    if (
      !crypto.timingSafeEqual(
        providedBuffer,
        expectedBuffer
      )
    ) {
      return null;
    }

    const userId = Buffer.from(
      encodedUserId,
      "base64url"
    ).toString("utf8");

    if (!userId) {
      return null;
    }

    return userId;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };