import { Magazine } from './magazine';
import { Subscriber } from './subscriber';

const veja = new Magazine();

const leitor = new Subscriber('Bob Cavernoso');

veja.subscribe(leitor.read.bind(leitor));

veja.publish('Notícia 1', 'Bla bla bla');

const leitor2 = new Subscriber('Capitão Caverna');

veja.subscribe(leitor2.read.bind(leitor2));

veja.publish('Notícia 2', 'Cla cla cla');
