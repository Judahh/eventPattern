import { DonaldDuck } from './donaldDuck';
import { Duck } from './duck';

class DuckTwin extends Duck {
  protected _uncle: DonaldDuck;
  protected _color: string;
  constructor(name: string, color: string, uncle: DonaldDuck) {
    super(name);
    this._color = color;
    this._uncle = uncle;
  }

  get color(): string {
    return this._color;
  }

  get uncle(): DonaldDuck {
    return this._uncle;
  }

  action() {
    console.log('Eu ' + this.name + ' irrito o ' + this._uncle.name + '!');
    this._uncle.action();
  }
}

export { DuckTwin };
