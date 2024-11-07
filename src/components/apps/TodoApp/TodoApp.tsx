import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import TodoItem from './TodoItem'
 export enum Category {
    Personal = 'Personal',
    Work = 'Work',
    School = 'School',
   Other= 'Other',
 }
 type FilteredType = 'all' | 'active'| 'completed'
const TodoApp: React.FC = () => {
    const filterButtons:{value:FilteredType, label:string}[] = [
        {value: "all",  label:"All"},
        {value: "active",  label:"Active"},
        {value: "completed",  label:"Completed"}
    ]
    const categories: {value:string, label:string}[] = [
        {value:Category.Personal, label:"Personal" },
        {value:Category.Work, label:"Work" },
        {value:Category.School, label:"School" },
        {value:Category.Other, label:"Other" },
    ]

  const todos: ITodo[] =[
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
 
  return <Card className='w-full max-w-2xl mx-auto'>
    <CardHeader>
<CardTitle className='text-2xl font-bold text-center'>
Todo List
</CardTitle>
</CardHeader>
<CardContent>
    <form onSubmit={()=>{}} className='flex gap-2 mb-6'>
        <Input className='flex-grow' placeholder='Add new todo...'/>
        <Select>
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
    <Button key = {btn.value} size = "sm">{btn.label}</Button>
))}

    </div>
   {todos.map((todo)=>{
    return <TodoItem  key = {todo.id} todo = {todo}/>
   })}
</CardContent>
    </Card>
}

export default TodoApp
