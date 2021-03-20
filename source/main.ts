import { Magazine } from './magazine';
import { PublisherSubscriber } from 'journaly';
import { Subscriber } from './subscriber';
import { Ancestor } from './ancestor';
import { DonaldDuck } from './donaldDuck';
import { DuckTwin } from './duckTwin';

const veja = new Magazine();

const leitor = new Subscriber('Bob Cavernoso');

veja.subscribe(leitor.read.bind(leitor));

veja.publish('Notícia 1', 'Bla bla bla');

const leitor2 = new Subscriber('Capitão Caverna');

veja.subscribe(leitor2.read.bind(leitor2));

veja.publish('Notícia 2', 'Cla cla cla');

const abril = new PublisherSubscriber();

const leitor3 = new Subscriber('Billy The Caveman');

abril.subscribe(leitor3.read.bind(leitor3), 'SuperInteressante');

abril.publish('SuperInteressante', 'Notícia 3', 'Dla dla dla');

abril.publish('SuperDesinteressante', 'Notícia 4', 'Fla fla fla');

veja.publish('Notícia 5', 'Gla gla gla');

const leitor4 = new Ancestor('Bubba The Cave Duck');

abril.subscribe(leitor4.read.bind(leitor4), 'SuperDesinteressante');

const duck = new DonaldDuck('Pato Donald');

leitor4.descendants.push(duck);

const twins = [
  new DuckTwin('Huguinho', 'red', duck),
  new DuckTwin('Zezinho', 'green', duck),
  new DuckTwin('Luisinho', 'blue', duck),
];
duck.nephews.push(...twins);
for (const twin of twins) {
  twin.action();
}
twins.push(new DuckTwin('Pedrinho', 'yellow', duck));
duck.nephews.push(twins[3]);

twins[3].action();
