export const ironOptions = {
  cookieName: "Next-Template",
  password: process.env.NEXT_PUBLIC_IRON_SESSION_SECRET,

  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
    maxAge: 60 * 60 * 24,
  },
};
