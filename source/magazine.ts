/* eslint-disable @typescript-eslint/no-explicit-any */
import { Subject } from './subject';

class Magazine implements Subject {
  protected subscribers: Array<(...params: any) => Promise<unknown>>;

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: (...params: any) => Promise<unknown>): boolean {
    if (this.checkSubscribers(subscriber) !== -1) return false;
    this.subscribers.push(subscriber);
    return true;
  }

  unsubscribe(subscriber: (...params: any) => Promise<unknown>): boolean {
    const index = this.checkSubscribers(subscriber);
    if (index === -1) {
      return false;
    }

    this.subscribers.splice(index, 1);
    return true;
  }

  async publish(...params: any[]): Promise<unknown> {
    return Promise.all(
      this.subscribers.map((subscriber) => {
        return subscriber(...params);
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected checkSubscribers(
    subscriber: (...params: any) => Promise<unknown>
  ): number {
    const index = this.subscribers.indexOf(subscriber);
    return index;
  }
}
export { Magazine };
