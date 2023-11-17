import { Employee, Recruiter } from './roles'

export interface User {
    id: number
    name: string
    photoUrl: string
    email: string
    country: string
    about?: string
    role_id: number
    role: Employee | Recruiter
    created_at: Date
    updated_at: Date
}
