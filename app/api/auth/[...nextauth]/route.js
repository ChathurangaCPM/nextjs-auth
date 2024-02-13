import User from '@/models/useModels';
import connectDB from '@/utils/connect';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

async function login(credentials) {
    try {
        connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("Wrong Credentials");
        const isCorrectUser = await bcrypt.compare(credentials.password, user.password);

        if (!isCorrectUser) throw new Error("Password is wrong please check!");

        return user;
    } catch (error) {
        console.log('server error: ', error);
    }
}

const handler = NextAuth({
    pages: {
        signIn: '/login'
    },

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    throw new Error("Failed to login");
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userName = user.userName;
                token.email = user.email;
                token.id = user.id;
            }   
            return token;
        },

        async session({ session, token }) {
            if (session) {
                session.user.userName = token.userName;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }