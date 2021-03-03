/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
interface Publisher {
  subscribe(
    topic: string,
    subscriber: (...params: any[]) => Promise<unknown>
  ): boolean;
  unsubscribe(
    topic: string,
    subscriber: (...params: any[]) => Promise<unknown>
  ): boolean;
  publish(topic: string, ...params: any[]): Promise<void>;
}
export type { Publisher };
