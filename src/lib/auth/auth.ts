import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authService } from "../api/auth/auth.service";

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { user, accessToken, expiresIn } =
          await authService.login(credentials);
        return { ...user, accessToken, expiresIn };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.avatarUrl = user.avatarUrl;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.accessToken = user.accessToken;
        token.accessTokenExpiresAt =
          Date.now() + ((user.expiresIn ?? 0) - 3) * 1000;
      }
      //เอามาเปรียบเทียบว่าหมดอายุหรือยังให้ส่ง null ออกไปเลย
      if (
        token.accessTokenExpiresAt &&
        Date.now() > token.accessTokenExpiresAt
      ) {
        return null;
      }
      if (trigger === 'update' && this.session) {
        token.avatarUrl = session.user.avatarUrl
      }

      return token;
    },
    session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.avatarUrl = token.avatarUrl;
      session.user.id = token.sub; //เข้าไปแก้ไขใน type ด้วย

      return session;
    },
  },
});
