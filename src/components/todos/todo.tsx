"use client"

import { useState } from "react"
import { Check, Pencil, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { todoItemProps } from "@/types/todoType"

interface TodoProps {
  todo: todoItemProps
  onDelete: (id: string) => void
  onToggleComplete: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

export function Todo({ todo, onDelete, onToggleComplete, onEdit }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (editText.trim() !== "") {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  const cancelEdit = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-card">
      <div className="flex items-center gap-3 flex-1">
        <Checkbox checked={todo.done} onCheckedChange={() => onToggleComplete(todo.id)} id={`todo-${todo.id}`} />

        {isEditing ? (
          <Input value={editText} onChange={(e) => setEditText(e.target.value)} className="flex-1" autoFocus />
        ) : (
          <label
            htmlFor={`todo-${todo.id}`}
            className={`flex-1 cursor-pointer ${todo.done ? "line-through text-muted-foreground" : ""}`}
          >
            {todo.text}
          </label>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <Button size="icon" variant="ghost" onClick={handleEdit} aria-label="Save">
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={cancelEdit} aria-label="Cancel">
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)} aria-label="Edit">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete"
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

