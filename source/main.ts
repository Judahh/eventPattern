import { Magazine } from './magazine';
import { PublishingCompany } from './publishingCompany';
import { Subscriber } from './subscriber';

const veja = new Magazine();

const leitor = new Subscriber('Bob Cavernoso');

veja.subscribe(leitor.read.bind(leitor));

veja.publish('Notícia 1', 'Bla bla bla');

const leitor2 = new Subscriber('Capitão Caverna');

veja.subscribe(leitor2.read.bind(leitor2));

veja.publish('Notícia 2', 'Cla cla cla');

const abril = new PublishingCompany();

const leitor3 = new Subscriber('Billy The Caveman');

abril.subscribe('SuperInteressante', leitor3.read.bind(leitor3));

abril.publish('SuperInteressante', 'Notícia 3', 'Dla dla dla');

abril.publish('SuperDesinteressante', 'Notícia 4', 'Fla fla fla');

veja.publish('Notícia 5', 'Gla gla gla');
