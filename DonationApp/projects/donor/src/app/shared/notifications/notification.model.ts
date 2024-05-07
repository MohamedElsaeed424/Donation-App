// notifications.model.ts
export class Notificationn {
  constructor(
    public id: number,
    public header: string,
    public content: string,
    public time: string,
    public day: string
  ) {}
}
