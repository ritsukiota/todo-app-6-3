import { db } from "@/lib/db";
import { todos } from "@/lib/schema"; // drizzle ORMで定義済みのテーブル
import { eq } from "drizzle-orm";
import { getUser } from "@/lib/auth"; // セッションからユーザーを取得
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUser();
  console.log("✅ getUserの結果:", user);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, user.id));

  return new NextResponse(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
