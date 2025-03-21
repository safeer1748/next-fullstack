import { Todos } from "@/components/todos/todos";
import { getData } from "@/server-actions/todoActions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function TodosPage() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }
  const parsedUserId = Number(userId);
  const data = await getData(parsedUserId);
  return (
    <main className="container py-10">
      <Todos data={data || []} />
    </main>
  );
}
