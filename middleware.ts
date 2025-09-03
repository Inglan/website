import { convexAuthNextjsMiddleware } from "@convex-dev/auth/nextjs/server";
import { client } from "./sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const redirect = await client.fetch(
    `*[_type == "redirect" && permanent == true && source.current == $source ]{
        "source": source.current,
        "destination": destination,
        permanent
      }[0]`,
    { source: pathname },
  );
  if (redirect)
    return NextResponse.redirect(
      redirect.destination,
      redirect.permanent ? 308 : 307,
    );
}

export default convexAuthNextjsMiddleware();

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
