import { Todos } from "@/components/todos/todos";
import { getUser } from "@/server-actions/userActions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function TodosPage() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }
  const data=await getUser(userId)
  return (
    <main className="container py-10">
      <Todos data={data[0].todos || []} userId={data[0].id} />
    </main>
  );
}
