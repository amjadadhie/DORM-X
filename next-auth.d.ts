import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    userID: number;
  }
  interface Session {
    user?: { id: number } & DefaultSession["User"];
  }
}


// import { Role } from "@prisma/client";
// import { DefaultSession, DefaultUser } from "next-auth";
// import { JWT, DefaultJWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: User;
//   }

//   interface User extends DefaultUser {
//     role: Role;
//     userID: number;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT extends DefaultJWT {
//     role: string;
//   }
// }