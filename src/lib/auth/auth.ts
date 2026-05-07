import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authService } from "../api/auth/auth.service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { user, accessToken } = await authService.login(credentials);
        return { ...user, accessToken };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.avatarUrl = user.avatarUrl;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.avatarUrl = token.avatarUrl;

      return session;
    },
  },
});
