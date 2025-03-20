import { Todos } from "@/components/todos/todos";
import { getUser } from "@/server-actions/userActions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function TodosPage() {
  const user = await currentUser()
  if (!user) {
    redirect('/sign-in')
  }
  const data = await getUser(user.id);
  return (
    <main className="container py-10">
      <Todos data={data?.[0]?.todos || []} />
    </main>
  );
}
