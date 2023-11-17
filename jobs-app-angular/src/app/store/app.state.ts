import { JobState } from './job'
import { UserState } from './user'

export interface AppState {
    jobs: JobState,
    user: UserState
}
