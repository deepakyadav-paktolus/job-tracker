// import { db } from '@/lib/prisma'
// import { NextResponse } from 'next/server'

// // GET all users
// export async function GET() {
//   const users = await db.user.findMany()
//   return NextResponse.json(users)
// }

// // POST create user
// export async function POST(req: Request) {
//   const { email: email } = await req.json()
//   const user = await db.user.create({
//     data: { email }
//   })
//   return NextResponse.json(user)
// }