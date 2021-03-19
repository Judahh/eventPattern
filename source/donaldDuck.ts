import { SenderReceiver } from 'journaly';
import { Duck } from './duck';

class DonaldDuck extends Duck {
  constructor(name: string, journaly: SenderReceiver<any>) {
    super(name, journaly);
  }

  action(name?: string): Promise<boolean> {
    super.action();
    if (name) this.journaly.publish(name + '.paro');
    return new Promise((resolve) => resolve(true));
  }
}

export { DonaldDuck };
