import { type NextMiddleware, type NextRequest, NextResponse } from 'next/server';

export const middleware: NextMiddleware = (req: NextRequest) => {
  const authUser = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME);

  const pagesToNotAccessAuth = ['/welcome', '/sign-in', '/sign-up', '/about'];
  const pagesToAuthAccess = ['/feed', '/groups'];

  const checkURL = (page: string) => req.url.includes(page);

  const isAuthUserOnPagesToNotAccessAuth = pagesToNotAccessAuth.some(page => checkURL(page));
  const isAuthUserOnPagesToAuthAccess = pagesToAuthAccess.some(page => checkURL(page));

  if (authUser && isAuthUserOnPagesToNotAccessAuth) {
    return NextResponse.redirect(new URL('/feed', req.url));
  }

  if (!authUser && isAuthUserOnPagesToAuthAccess) {
    return NextResponse.redirect(new URL('/welcome', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/welcome',
    '/sign-in',
    '/sign-up',
    '/donate-now',
    '/about',
    '/blog',
    '/blog/[slug]',
    '/feed',
    '/groups',
    '/groups/[id]',
    '/[nickName]'
  ]
};
