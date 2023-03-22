import { Injectable, TemplateRef } from '@angular/core';

export interface ToastInfo {
  classname: string,
  header: string;
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts:ToastInfo[] = [];

  constructor() { }

  show(classname:string, header:string, body:string, delay=5000) {
    this.toasts.push({classname, header, body, delay})
  }

  remove(toast:ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
