import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface user extends DefaultUser {
    ID: number;
  }
  interface Session {
    user?: { ID: number } & DefaultSession["User"];
  }
}
