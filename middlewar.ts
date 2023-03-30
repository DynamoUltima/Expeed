// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';
const mid=()=>{
    return;
}

export default mid;

// export default withAuth(
//     function middleware(req) {
//         if (req.nextUrl.pathname.startsWith('serviceProviders') && req.nextauth.token?.role != 'provider') {
//             return NextResponse.redirect('/businessPage')
//         }
//     },
//     {
//         callbacks: {
//             authorized: ({ token  }) => !!token
//         }
//     }
// )