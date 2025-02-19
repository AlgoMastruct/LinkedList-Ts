export default class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data?: number) {
    this.data = data ?? 0;
    this.next = null;
  }
}
