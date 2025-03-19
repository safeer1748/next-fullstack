import { Todos } from "@/components/todos/todos"
import { getData } from "@/server-actions/todoActions"
export default async function TodosPage() {
  const data= await getData()
  return (
    <main className="container py-10">
      <Todos data={data}/>
    </main>
  )
}

