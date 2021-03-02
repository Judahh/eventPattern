import { Magazine } from './magazine';
import { PublishingCompany } from './publishingCompany';
import { Subscriber } from './subscriber';

const veja = new Magazine();

const leitor = new Subscriber('Bob Cavernoso');

veja.subscribe(leitor.read.bind(leitor));

veja.publish('Notícia', 'Texto da notícia').then((end) => {
  console.log('Fim da publicação:', end);
});

const leitor2 = new Subscriber('Capitão Caverna');

veja.subscribe(leitor2.read.bind(leitor2));

veja.publish('Notícia 2', 'Texto da notícia 2').then((end) => {
  console.log('Fim da publicação 2:', end);
});

const abril = new PublishingCompany();

const leitor3 = new Subscriber('Billy The Caveman');

abril.subscribe('SuperInteressante', leitor3.read.bind(leitor3));

abril
  .publish('SuperInteressante', 'Notícia 3', 'Texto da notícia 3')
  .then((end) => {
    console.log('Fim da publicação 3:', end);
  });

abril
  .publish('SuperDesinteressante', 'Notícia 4', 'Texto da notícia 4')
  .then((end) => {
    console.log('Fim da publicação 4:', end);
  });

veja.publish('Notícia 5', 'Texto da notícia 5').then((end) => {
  console.log('Fim da publicação 5:', end);
});
