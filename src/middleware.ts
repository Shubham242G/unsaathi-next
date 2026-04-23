import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of old capitalized paths and their new lowercase versions
const redirectMap: Record<string, string> = {
  '/why-Unsaathi': '/why-unsaathi',
  '/how-Unsaathi': '/how-unsaathi',
  '/About-Us': '/about-us',
  '/services/mutual-Divorce': '/services/mutual-divorce',
  '/services/annulment-Of-Marriage': '/services/annulment-of-marriage',
  '/services/child-Visitation': '/services/child-visitation',
  '/services/child-Custody': '/services/child-custody',
  '/services/contested-Divorce': '/services/contested-divorce',
  '/services/conjugal-Rights': '/services/conjugal-rights',
  '/services/judicial-Separation': '/services/judicial-separation',
  '/services/maintanance-And-Alimony': '/services/maintenance-and-alimony',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the path needs to be redirected
  const redirectPath = redirectMap[pathname];
  
  if (redirectPath) {
    return NextResponse.redirect(new URL(redirectPath, request.url), 308);
  }
  
  // Optional: Automatically lowercase any URL with capital letters
  if (pathname !== pathname.toLowerCase()) {
    const lowercasePath = pathname.toLowerCase();
    return NextResponse.redirect(new URL(lowercasePath, request.url), 308);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};