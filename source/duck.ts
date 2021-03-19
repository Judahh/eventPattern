import { SenderReceiver } from 'journaly';
import { Subscriber } from './subscriber';

class Duck extends Subscriber {
  journaly: SenderReceiver<any>;
  constructor(name: string, journaly: SenderReceiver<any>) {
    super(name);
    this.journaly = journaly;
    this.journaly.subscribe(this.action.bind(this), this.name + '.irrito');
    this.journaly.subscribe(this.stop.bind(this), this.name + '.paro');
  }

  action(): Promise<boolean> {
    console.log('Quack!');
    return new Promise((resolve) => resolve(true));
  }

  stop(): Promise<boolean> {
    console.log('Eu ' + this.name + ' parei!');
    console.log();
    return new Promise((resolve) => resolve(true));
  }
}

export { Duck };
