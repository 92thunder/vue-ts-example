import { Module, MutationTree } from 'vuex'
import { Task } from 'vue-ts-core'
import RootState from '../RootState'

export interface TaskState {
  tasks: Task[]
}

export const state: TaskState = {
  tasks: []
}

const mutations: MutationTree<TaskState> = {
  addTask(state, task: Task) {
    state.tasks.push(task)
  }
}

const task: Module<TaskState, RootState> = {
  state,
  mutations
}

export default task
