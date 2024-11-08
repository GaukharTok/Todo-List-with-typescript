export enum Category {
    Personal = 'Personal',
    Work = 'Work',
    School = 'School',
   Other= 'Other',
 }
 export interface ITodo{
    id: number 
    text: string
    completed:boolean
    category: Category
    createdAt: Date
}

export  type FilteredType = 'all' | 'active'| 'completed'