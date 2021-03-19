import { Magazine } from './magazine';
import { PublisherSubscriberWithMemory, SenderReceiver } from 'journaly';
import { Subscriber } from './subscriber';
import { DonaldDuck } from './donaldDuck';
import { DuckTwin } from './duckTwin';
import { Duck } from './duck';

const veja = new Magazine();

const leitor = new Subscriber('Bob Cavernoso');

veja.subscribe(leitor.read.bind(leitor));

veja.publish('Notícia 1', 'Bla bla bla');

const leitor2 = new Subscriber('Capitão Caverna');

veja.subscribe(leitor2.read.bind(leitor2));

veja.publish('Notícia 2', 'Cla cla cla');

const abril = new PublisherSubscriberWithMemory();

const leitor3 = new Subscriber('Billy The Caveman');

abril.subscribe(leitor3.read.bind(leitor3), 'SuperInteressante');

abril.publish('SuperInteressante', 'Notícia 3', 'Dla dla dla');

abril.publish('SuperDesinteressante', 'Notícia 4', 'Fla fla fla');

veja.publish('Notícia 5', 'Gla gla gla');

const journaly = new SenderReceiver();

const leitor4 = new Duck('Bubba The Cave Duck', journaly);

abril.subscribe(leitor4.read.bind(leitor4), 'SuperDesinteressante');

new DonaldDuck('Pato Donald', journaly);

const twins = [
  new DuckTwin('Huguinho', journaly, 'Pato Donald', 'red'),
  new DuckTwin('Zezinho', journaly, 'Pato Donald', 'green'),
  new DuckTwin('Luisinho', journaly, 'Pato Donald', 'blue'),
];
for (const twin of twins) {
  twin.action();
}
twins.push(new DuckTwin('Pedrinho', journaly, 'Pato Donald', 'yellow'));

twins[3].action();
