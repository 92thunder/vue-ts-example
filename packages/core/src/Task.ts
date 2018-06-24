export enum TaskStates {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done'
}

export default class Task {
  title: string
  description: string
  status: TaskStates

  constructor(title: string, description: string) {
    this.title = title
    this.description = description
    this.status = TaskStates.TODO
  }

  changeStatus(state: TaskStates) {
    this.status = state
  }
}
