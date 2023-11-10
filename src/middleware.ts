import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const regex = new RegExp('/api/*');
  if (regex.test(request.url)) {
    return NextResponse.next();
  } else {
    // Create an empty event object if it's not needed for your use case
    const event = {} as NextFetchEvent;

    // Return the result of authMiddleware with both params and event
    return authMiddleware({
      publicRoutes: ['/'],
    })(request, event);
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
