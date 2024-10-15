// import { NextResponse } from 'next/server';
// import { getUserById } from '@/lib/database'; // Assume this function fetches user data

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//     const user = await getUserById(params.id);

//     if (!user) {
//         return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     return NextResponse.json(user);
// }
