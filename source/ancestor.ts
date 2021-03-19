import { Duck } from './duck';

class Ancestor extends Duck {
  protected _descendants: Duck[];

  get descendants(): Duck[] {
    return this._descendants;
  }
  constructor(name: string, descendants?: Duck[]) {
    super(name);
    this._descendants = descendants ? descendants : [];
  }
}
export { Ancestor };
