export class NoteData {
  static currentId:number = 1;
  id:number;
  title:string;
  date:Date;
  content:string;

  constructor(title:string, date=new Date(), content:string) {
    this.id = NoteData.currentId;
    NoteData.currentId++;
    this.title = title;
    this.date = date;
    this.content = content;
  }
}