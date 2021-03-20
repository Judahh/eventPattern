import { Duck } from './duck';
import { DuckTwin } from './duckTwin';

class DonaldDuck extends Duck {
  protected _nephews: DuckTwin[];

  constructor(name: string, nephews?: DuckTwin[]) {
    super(name);
    this._nephews = nephews ? nephews : [];
  }

  get nephews(): Duck[] {
    return this._nephews;
  }

  action(name?: string) {
    super.action();
    if (name) {
      this.nephews.find((duckTwin) => duckTwin.name === name)?.stop();
    }
  }
}

export { DonaldDuck };
