/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
interface Publisher {
  subscribe(
    topic: string,
    subscriber: (...params: any) => Promise<unknown>
  ): void;
  unsubscribe(
    stopic: string,
    ubscriber: (...params: any) => Promise<unknown>
  ): void;
  publish(topic: string, ...params: any[]): void;
}
export type { Publisher };
