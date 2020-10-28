export enum Severity {
  Light,
  High,
  VeryHigh,
  Critical,
}

export class Todo {
  constructor(
    public title: string,
    public deadline: Date,
    public description: string = '',
    public severity: Severity = Severity.Light,
    public isOpen: boolean = true,
  ) {}

  static loadMultipleFromJson(json: string): Todo[] {
    const initialDataList = JSON.parse(json);
    const returnedData: Todo[] = [];

    initialDataList.forEach(todoData => returnedData.push(new Todo(
      todoData.title,
      new Date(todoData.deadline)
    )));

    return returnedData;
  }
}
