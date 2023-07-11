import { type NextMiddleware, type NextRequest, NextResponse } from 'next/server';

const pagesToAuthAccess = ['/feed', '/groups', '/user'];
const pagesToNotAccessAuth = ['/welcome', '/transparency', '/sign-in', '/sign-up', '/about', '/contact'];

export const middleware: NextMiddleware = (req: NextRequest) => {
  const authUser = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME)?.value;

  const checkURL = (page: string) => req.url.includes(page);

  const isAuthUserOnPagesToAuthAccess = pagesToAuthAccess.some(page => checkURL(page));
  const isAuthUserOnPagesToNotAccessAuth = pagesToNotAccessAuth.some(page => checkURL(page));

  if (!authUser && isAuthUserOnPagesToAuthAccess) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  if (authUser && isAuthUserOnPagesToNotAccessAuth) {
    return NextResponse.redirect(new URL('/feed', req.url));
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
    '/feed',
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
