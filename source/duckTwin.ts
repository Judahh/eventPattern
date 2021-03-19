import { SenderReceiver } from 'journaly';
import { Duck } from './duck';

class DuckTwin extends Duck {
  protected _color: string;
  protected _uncle: string;
  constructor(
    name: string,
    journaly: SenderReceiver<any>,
    uncle: string,
    color: string
  ) {
    super(name, journaly);
    this._uncle = uncle;
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  get uncle(): string {
    return this._uncle;
  }

  action(): Promise<boolean> {
    console.log('Eu ' + this.name + ' irrito o ' + this._uncle + '!');
    this.journaly.publish(this.uncle + '.irrito', this.name);
    return new Promise((resolve) => resolve(true));
  }
}

export { DuckTwin };
