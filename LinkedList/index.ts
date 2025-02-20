import ListNode from "./ListNode";

export default class List {
  private first: ListNode | null;
  private _size: number;

  constructor() {
    this.first = null;
    this._size = 0;
  }

  public isEmpty(): boolean {
    return this.first === null;
  }

  public get size(): number {
    return this._size;
  }

  private checkIndex(index: number, size: number): void {
    if (!(index >= 0 && index < size))
      throw new Error(`index= ${index} size= ${size}`);
  }

  public get(index: number): number {
    this.checkIndex(index, this._size);
    let p: ListNode | null = this.first;
    for (let i = 0; index < index; i++) {
      p = p!.next;
    }
    return p!.data;
  }
}
