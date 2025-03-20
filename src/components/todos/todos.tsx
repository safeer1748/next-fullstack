"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Todo, type TodoItem } from "@/components/todos/todo"
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/server-actions/todoActions"
import { useAuth } from "@clerk/nextjs"
export function Todos({ data }: { data: TodoItem[] }) {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [newTodoText, setNewTodoText] = useState("")
  const userId:any = useAuth()
  useEffect(() => {
    setTodos(data)
  }, [data])

  const handleAddTodo = async () => {
    if (newTodoText.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: newTodoText,
        done: false,
      }
      await addTodo(newTodo.id, newTodo.text, userId!)
      setNewTodoText("")
    }
  }

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id)
  }

  const toggleComplete = async (id: string) => {
    await toggleTodo(id)
  }

  const handleEditTodo = async (id: string, newText: string) => {
    await editTodo(id, newText)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6 mt-6">
      <h1 className="text-2xl font-bold text-center">Todo List</h1>

      <div className="flex gap-2">
        <Input
          placeholder="Add a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={handleAddTodo}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggleComplete={toggleComplete} onEdit={handleEditTodo} />
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="text-sm text-muted-foreground">
          {todos.filter((t) => t.done).length} of {todos.length} tasks completed
        </div>
      )}
    </div>
  )
}

