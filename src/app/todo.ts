export class Todo {
  constructor(
    public title: string,
    public deadline: Date
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
