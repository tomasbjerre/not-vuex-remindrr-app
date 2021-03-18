export interface TodoTask {
  taskName: string;
  taskReciever: string;
}

export interface MainModel {
  username: string;
}

export interface ApplicationState {
  mainModel: MainModel;
  tasks: TodoTask[];
}

export class ApplicationService {
  private state: ApplicationState = {
    mainModel: {
      username: "tomasbjerre",
    },
    tasks: [
      { taskName: "take pictures", taskReciever: "mom and dad" },
      { taskName: "email organisers slides", taskReciever: "myself" },
      { taskName: "send resume", taskReciever: "dev job" },
    ],
  };

  public getMainModel(): MainModel {
    return this.state.mainModel;
  }

  public getTasks(): TodoTask[] {
    return this.state.tasks;
  }

  public addTask(taskName: string, taskReciever: string): void {
    this.state.tasks.push({ taskName, taskReciever });
  }

  public removeTask(taskIndex: number): void {
    this.state.tasks.splice(taskIndex, 1);
  }

  public removeAllTasks(): void {
    this.state.tasks.splice(0, this.state.tasks.length);
  }
}

export default new ApplicationService();
