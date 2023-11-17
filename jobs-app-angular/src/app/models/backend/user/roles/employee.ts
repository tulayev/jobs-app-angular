export interface Employee {
    specialization: Specialization
    skills: Skill[]
    qualification: Qualification
    expectedSalary: number
    experiences: Experience[]
}

interface Specialization {
    id: number
    name: string
}

interface Skill {
    id: number
    name: string
}

interface Qualification {
    id: number
    name: string
}

interface Experience {
    companyName: string
    period: Period
}

interface Period {
    from: number
    to: number
}
