export class Message {
  id: string;
  contents: string;
  href: string;
  notNew: boolean;
  constructor() {
    this.notNew = false;
  }
}

