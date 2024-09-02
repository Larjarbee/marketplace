import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials, req) {
        if (!credentials?.password || !credentials?.username) {
          throw new Error("Invalid credentials");
        }

        try {
          await connectToDatabase();
          const user = await User.findOne({
            username: credentials?.username,
          });

          if (!user) {
            throw new Error("Admin not found");
          }

          const passwordMatch = await bcrypt.compare(
            credentials?.password,
            user?.password
          );

          if (!passwordMatch) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],

  // jwt: { encode, decode },
  // secret: process.env.NEXTAUTH_SECRET,
};
