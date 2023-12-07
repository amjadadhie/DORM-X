import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    ID: number;
  }
  interface Session {
    user?: { ID: number } & DefaultSession["User"];
  }
}
