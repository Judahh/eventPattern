import { Subscriber } from './subscriber';

class Duck extends Subscriber {
  constructor(name: string) {
    super(name);
  }

  action() {
    console.log('Quack!');
  }

  stop() {
    console.log('Eu ' + this.name + ' parei!');
  }
}

export { Duck };
