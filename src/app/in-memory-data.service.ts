import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const iceCreams = [
      {
        name: 'Pineapple Passionfruit',
        description:
          'Sorvete de abacaxi com pedaços de abacaxi e calda de maracujá',
        calories: 170,
        category: 'vegano',
        type: 'sorbet',
        ingredients:
          'Água, açúcar, abacaxi, maracujá, xarope de glicose, suco concentrado de abacaxi, inulina, dextrose, espessantes goma jataí, pectina, aromatizantes',
        image:
          'https://www.benandjerry.com.br/files/live/sites/systemsite/files/flavors/products/us/bulk/pineapple-passionfruit-sorbet-bulk-detail.png',
        price: 10,
        quantity: 50
      },
      {
        name: 'Berry Berry Extraordinary®',
        description: 'Sorvete de mirtilo (blueberry), framboesa e amora',
        calories: 170,
        category: 'vegano',
        type: 'sorbet',
        ingredients:
          'água, açúcar, purê de framboesa, purê de mirtilo (blueberry), xarope de glicose, suco concentrado de mirtilo (blueberry), inulina, suco concentrado de amora, suco concentrado de limao, espessantes pectina, goma jataí.',
        image:
          'https://www.benandjerry.com.br/files/live/sites/systemsite/files/flavors/products/us/bulk/berry-berry-sorbet-bulk-detail.png',
        price: 10,
        quantity: 50
      },
      {
        name: 'Chocolate Therapy',
        description: 'Sorvete sabor chocolate com cookie sabor chocolate',
        calories: 170,
        category: 'tradicional',
        type: 'sorvete',
        ingredients:
          'creme de leite, água, leite condensado, açúcar, cookie sabor chocolate, cacau, gema de ovo, aromatizante, espessantes goma guar, carragena',
        image:
          'https://www.benandjerry.com.br/files/live/sites/systemsite/files/flavors/products/us/bulk/chocolat-therapy-bulk-detail.png',
        price: 10,
        quantity: 50
      },
      {
        name: 'Vanilla',
        description: 'Sorvete sabor baunilha',
        calories: 170,
        category: 'tradicional',
        type: 'sorvete',
        ingredients:
          'creme de leite, leite condensado, água, açúcar, gema de ovo, aromatizantes, espessantes goma guar, carragena',
        image:
          'https://www.benandjerry.com.br/files/live/sites/systemsite/files/flavors/products/us/bulk/vanilla-bulk-detail.png',
        price: 10,
        quantity: 50
      }
    ];
    return { iceCreams };
  }
}
