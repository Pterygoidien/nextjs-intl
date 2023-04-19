import prisma from "@/app/common/utils/prisma";
import bcrypt from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@email.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                // Do your own validation here
                if (!email || !password) {
                    throw new Error("Invalid email or password");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                });
                if (!user) {
                    throw new Error("User not found");
                }
                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) {
                    throw new Error("Invalid password");
                }
                return user;
            }

        }),

    ],
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

