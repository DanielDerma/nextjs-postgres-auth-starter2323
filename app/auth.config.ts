import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return true
      // let isLoggedIn = !!auth?.user;
      // let isOnDashboard = nextUrl.pathname.startsWith('/protected');
      // 
      // if (isOnDashboard) {
      // if (isLoggedIn) return true;
      // return Response.redirect(new URL('/login', nextUrl), 302);
      // } else if (isLoggedIn) {
      // return Response.redirect(new URL('/protected', nextUrl));
      // }
      // 
      // return true;
    },
  },
} satisfies NextAuthConfig;
