/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
interface Subject {
  subscribe(subscriber: (...params: any) => Promise<unknown>): void;
  unsubscribe(subscriber: (...params: any) => Promise<unknown>): void;
  publish(...params: any[]): void;
}
export type { Subject };
