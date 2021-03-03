/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
interface Subject {
  subscribe(subscriber: (...params: any[]) => Promise<unknown>): boolean;
  unsubscribe(subscriber: (...params: any[]) => Promise<unknown>): boolean;
  publish(...params: any[]): Promise<void>;
}
export type { Subject };
