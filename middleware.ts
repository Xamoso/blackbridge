import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redireciona apenas se estiver na raiz "/"
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/pt';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
