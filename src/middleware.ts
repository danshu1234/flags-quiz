
import { NextRequest, NextResponse } from "next/server";

export default function middleware (request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const isSecond = request.cookies.get('second')  
    const isThird = request.cookies.get('third')
    if (pathname === '/second-level') {
        if (isSecond) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
    } else if (pathname === '/third-level') {
        if (isThird) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}

export const config = {
    matcher: ['/second-level', '/third-level']
}