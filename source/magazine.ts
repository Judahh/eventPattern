/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Subject } from './subject';

class Magazine implements Subject {
  protected subscribers: Array<(...params: any[]) => Promise<unknown>>;

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: (...params: any[]) => Promise<unknown>): boolean {
    if (this.findSubscriber(subscriber) !== -1) return false;
    this.subscribers.push(subscriber);
    return true;
  }

  unsubscribe(subscriber: (...params: any[]) => Promise<unknown>): boolean {
    const index = this.findSubscriber(subscriber);
    if (index === -1) return false;

    this.subscribers.splice(index, 1);
    return true;
  }

  async publish(...params: any[]): Promise<void> {
    await Promise.all(
      this.subscribers.map((subscriber) => subscriber(...params))
    );
  }

  protected findSubscriber(
    subscriber: (...params: any[]) => Promise<unknown>
  ): number {
    return this.subscribers.indexOf(subscriber);
  }
}
export { Magazine };
