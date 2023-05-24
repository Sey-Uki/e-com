type SpecsListItem = {
  id: 1;
  key: string;
  value: string;
};

export type SpecsItem = {
  id: number;
  title: string;
  list: SpecsListItem[];
};

const specs: SpecsItem[] = [
  {
    id: 1,
    title: 'Title 1',
    list: [
      {
        id: 1,
        key: 'key1',
        value: 'value1',
      },
      {
        id: 1,
        key: 'key2',
        value: 'value2',
      },
    ],
  },
  {
    id: 2,
    title: 'Title 2',
    list: [
      {
        id: 1,
        key: 'key1',
        value: 'value1',
      },
      {
        id: 1,
        key: 'key2',
        value: 'value2',
      },
    ],
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Hauteville Concrete Rocking Chair',
    price: '100₽',
    description:
      'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    specs,
    thumbnail:
      'https://www.free-css.com/assets/files/free-css-templates/preview/page225/shop/assets/images/product-1.jpg',
  },
  {
    id: 2,
    name: 'Pavilion Speaker',
    price: '150₽',
    description:
      'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    specs,
    thumbnail:
      'https://www.free-css.com/assets/files/free-css-templates/preview/page225/shop/assets/images/product-2.jpg',
  },
  {
    id: 3,
    name: 'LIGOMANCER',
    price: '50₽',
    description:
      'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    specs,
    thumbnail:
      'https://www.free-css.com/assets/files/free-css-templates/preview/page225/shop/assets/images/product-3.jpg',
  },
];
