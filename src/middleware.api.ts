import { type NextMiddleware, type NextRequest, NextResponse } from 'next/server';

const pagesToAuthAccess = ['/feed', '/groups'];
const pagesToNotAccessAuth = ['/welcome', '/sign-in', '/sign-up', '/about'];

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
    '/welcome',
    '/sign-in',
    '/sign-up',
    '/donate-now',
    '/transparency',
    '/about',
    '/blog',
    '/blog/[slug]',
    '/feed',
    '/groups',
    '/groups/[id]',
    '/[nickName]'
  ]
};
