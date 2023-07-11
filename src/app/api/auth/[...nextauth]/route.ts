import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" ,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        const userFound = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!userFound) throw new Error("Invalid credentials");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error("Invalid credentials");

        console.log(userFound);

        return userFound;
      },
    }),
    
  ],
  pages: {
    signIn: "/signup"
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
})

export { handler as GET, handler as POST }