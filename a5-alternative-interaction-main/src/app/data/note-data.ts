import {nanoid} from 'nanoid';

export class NoteData {
  id:string;
  date:Date;
  title:string;
  tag:string;
  content:string;

  constructor(title:string, tag:string, content:string) {
    this.id = nanoid();
    this.date = new Date();
    this.title = title;
    this.tag = tag;
    this.content = content;
  }

  static freeze(instance:NoteData) {
    return {
      _class : 'NoteData',
      id : instance.id,
      date : instance.date,
      title : instance.title,
      tag: instance.tag,
      content: instance.content
    }
  }

  static replacer(key:any, value:any) {
    return (value instanceof NoteData) ? NoteData.freeze(value) : value;
  }

  static thaw(instance:any) {
    return new NoteData(instance.title, instance.tag, instance.content);
  }

  static reviver(key:any, value:any) {
    if (value instanceof Object && value._class === 'NoteData') {
      return NoteData.thaw(value);
    }

    return value;
  }

  dateString():string {
    return this.date.toDateString();
  }

  setNewValues(title:string, tag:string, content:string) {
    this.title = title;
    this.tag = tag;
    this.content = content;
  }
}