type SpecsListItem = {
  id: number;
  key: string;
  value: string;
  imageSrc?: string;
};

export type SpecsItem = {
  id: number;
  title: string;
  list: SpecsListItem[];
};

const specs: SpecsItem[] = [
  {
    id: 1,
    title: 'Основные',
    list: [
      {
        id: 1,
        key: 'Материал',
        value: 'Сталь 4 мм',
      },
      {
        id: 2,
        key: 'Покрытие',
        value: 'Порошковое по RAL',
      },
      {
        id: 3,
        key: 'Размеры',
        value: 'Открыть изображение',
        imageSrc: require('../../public/assets/images/products/min.png'),
      },
    ],
  },
];

export type CommentItem = {
  id: number;
  text: string;
  rate: number;
  author: string;
};

const lorem =
  'Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.';

const comments: CommentItem[] = [
  {
    id: 1,
    author: 'Random',
    text: lorem,
    rate: 2.5,
  },
  {
    id: 2,
    author: 'Random',
    text: lorem,
    rate: 5,
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Кронштейн Желоба (MAX)',
    price: '42₽',
    description: lorem,
    specs,
    comments,
    thumbnail: require('../../public/assets/images/brackets/bracket1.jpeg'),
  },
  {
    id: 2,
    name: 'Кронштейн Желоба (MIN)',
    price: '38₽',
    description: lorem,
    specs,
    comments,
    thumbnail: require('../../public/assets/images/brackets/bracket2.webp'),
  },
];
