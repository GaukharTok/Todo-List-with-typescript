import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { FormEvent, useState } from 'react'
import TodoItem from './TodoItem'
import { ITodo } from  './todo'
import { Category, FilteredType,  } from './todo'


 const temptodos: ITodo[] =[
    {
        id:1,
        text:"Learn React",
        completed: false,
        category: Category.Personal,
        createdAt: new Date(),
    },
    {
        id:2,
        text:"Learn Next.js",
        completed: true,
        category: Category.Work,
        createdAt: new Date(),
    },
  ]
 
const TodoApp: React.FC = () => {
    const [todos, setTodos]=useState<ITodo[]>(temptodos)
    const [newTodo, setNewTodo]=useState<string>('')
    const [category, setCategory]= useState<Category>(Category.Personal)
    const [filter,setFilter]=useState<any>('all')
    const filterButtons:{value:FilteredType, label:string}[] = [
        {value: "all",  label:"All"},
        {value: "active",  label:"Active"},
        {value: "completed",  label:"Completed"}
    ]

 const categories = Object.entries(Category).map(([key, value])=>({
    value:key,
    label:value
 }))
 
 const addTodo =(e: FormEvent): void =>{
    e.preventDefault()
if (newTodo.trim ()){
    setTodos([
        ...todos,
        {
            id: Date.now(),
            text: newTodo,
            completed: false,
            category,
            createdAt: new Date(),

        },
    ])
}
 }

 const filteredTodos =todos.filter(todo=>{
    if (filter === "completed") return todo.completed
    if(filter === "active")return !todo.completed
    return true
 })


 const toggleTodo = (id:number)=>{
    setTodos(
        todos.map(todo=>todo.id ===id ?{...todo,completed:!todo.completed}:todo)
    )
 }

 const deleteTodo = (id:number)=>{
    const newList = todos.filter((todo)=>todo.id !==id)
    setTodos(newList)
 }
  return <Card className='w-full max-w-2xl mx-auto'>
    <CardHeader>
<CardTitle className='text-2xl font-bold text-center'>
Todo List
</CardTitle>
</CardHeader>
<CardContent>
    <form onSubmit={addTodo} className='flex gap-2 mb-6'>
        <Input
        value = {newTodo}
        onChange = {(e)=> setNewTodo(e.target.value)}
         className='flex-grow'
          placeholder='Add new todo...'/>
        <Select value ={category} onValueChange={(value:Category)=>setCategory(value)}>
            <SelectTrigger className='w-[140px]'>
<SelectValue placeholder = "Category"/>
</SelectTrigger>
    <SelectContent>
  
          {categories.map ((category)=>(
            <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>
          ))}
    </SelectContent>

           
        </Select>
        <Button type ="submit">Add</Button>

    </form>
    {/*Filters* */}
    <div className='flex gap-2 mb-6'>
{filterButtons.map((btn)=>(
    <Button 
    key = {btn.value} 
    size = "sm"
    onClick={()=>setFilter(btn.value)}
    variant ={filter ===btn.value ? 'default': 'outline'}
    >{btn.label}</Button>
))}

    </div>
   {filteredTodos.map((todo)=>{
    return <TodoItem  key = {todo.id} todo = {todo} onToggle = {toggleTodo} onDelete={deleteTodo}/>
   })}
</CardContent>
    </Card>
}

export default TodoApp
