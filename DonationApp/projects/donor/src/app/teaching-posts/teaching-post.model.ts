export class TeachingPost {
  constructor(
    public id: number,
    public organization :string,
    public subject: string,
    public date: string,
    public description: string,
    public area: string,
    public governorate: string,
    public numberOfStudents: number,
    public address: string
  ) {}
}
