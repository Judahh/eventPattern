/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Publisher } from './publisher';

class PublishingCompany implements Publisher {
  protected subscribers: {
    [topic: string]: Array<(...params: any[]) => Promise<unknown>>;
  };

  constructor() {
    this.subscribers = {};
  }

  subscribe(
    topic: string,
    subscriber: (...params: any[]) => Promise<unknown>
  ): boolean {
    if (this.findSubscriber(topic, subscriber) !== -1) return false;
    this.subscribers[topic].push(subscriber);
    return true;
  }

  unsubscribe(
    topic: string,
    subscriber: (...params: any[]) => Promise<unknown>
  ): boolean {
    const index = this.findSubscriber(topic, subscriber);
    if (index === -1) return false;

    this.subscribers[topic].splice(index, 1);
    return true;
  }

  async publish(topic: string, ...params: any[]): Promise<void> {
    if (!this.subscribers[topic]) this.subscribers[topic] = [];

    await Promise.all(
      this.subscribers[topic].map((subscriber) => subscriber(...params))
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected findSubscriber(
    topic: string,
    subscriber: (...params: any[]) => Promise<unknown>
  ): number {
    if (!this.subscribers[topic]) this.subscribers[topic] = [];

    return this.subscribers[topic].indexOf(subscriber);
  }
}
export { PublishingCompany };
