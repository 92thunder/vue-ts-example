import { Task, TaskStates } from '../src/index'

describe('#Task', () => {
  it('no error', function() {
    const task = new Task('test', 'test')
    expect(task.status).toEqual(TaskStates.TODO)
    task.changeStatus(TaskStates.DONE)
    expect(task.status).toEqual(TaskStates.DONE)
  })
})
