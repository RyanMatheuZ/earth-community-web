import { type NextMiddleware, type NextRequest, NextResponse } from 'next/server';

interface PagesAccess {
  [key: string]: boolean;
}

const pagesToAuthAccess: PagesAccess = {
  '/groups': true,
  '/user': true
};

const pagesToNotAccessAuth: PagesAccess = {
  '/welcome': true,
  '/transparency': true,
  '/sign-in': true,
  '/sign-up': true,
  '/about': true,
  '/contact': true
};

export const middleware: NextMiddleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const isAuthUser = req.cookies.has(process.env.NEXT_PUBLIC_COOKIE_NAME);
  const isAuthUserOnPagesToAuthAccess = pagesToAuthAccess[pathname] || false;
  const isAuthUserOnPagesToNotAccessAuth = pagesToNotAccessAuth[pathname] || false;

  if (isAuthUser && isAuthUserOnPagesToNotAccessAuth) {
    return NextResponse.redirect(new URL('/feed', req.url));
  }

  if (!isAuthUser && isAuthUserOnPagesToAuthAccess) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/about',
    '/blog',
    '/blog/[slug]',
    '/contact',
    '/donate-now',
    '/groups',
    '/groups/[id]',
    '/sign-in',
    '/sign-up',
    '/transparency',
    '/user',
    '/user/[nickName]',
    '/user/[nickName]/donations',
    '/user/[nickName]/donations/[id]',
    '/welcome'
  ]
};
