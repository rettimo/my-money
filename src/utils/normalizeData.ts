const typeIds = [
  { id: 0, name: 'Доход' },
  { id: 1, name: 'Рассход' },
]

const accountIds = [
  {
    id: 0,
    name: 'Карта Андрей',
  },
  {
    id: 1,
    name: 'Карта Алёна',
  },
  {
    id: 2,
    name: 'Наличные',
  },
  {
    id: 3,
    name: 'Доллары',
  },
]

const categoryIds = [
  {
    id: 0,
    name: 'Продукты',
    typeId: 1,
  },
  {
    id: 1,
    name: 'Кафе и рестораны',
    typeId: 1,
  },
  {
    id: 2,
    name: 'Кино',
    typeId: 1,
  },
  {
    id: 3,
    name: 'Животные',
    typeId: 1,
  },
  {
    id: 4,
    name: 'Такси',
    typeId: 1,
  },
  {
    id: 5,
    name: 'Гигиена',
    typeId: 1,
  },
  {
    id: 6,
    name: 'Услуги',
    typeId: 1,
  },
  {
    id: 7,
    name: 'Подписки',
    typeId: 1,
  },
  {
    id: 8,
    name: 'Аптека',
    typeId: 1,
  },
  {
    id: 9,
    name: 'Одежда',
    typeId: 1,
  },
  {
    id: 10,
    name: 'Спорт',
    typeId: 1,
  },
  {
    id: 11,
    name: 'Подарки',
    typeId: 1,
  },
  {
    id: 12,
    name: 'Долги',
    typeId: 1,
  },
  {
    id: 13,
    name: 'Связь',
    typeId: 1,
  },
  {
    id: 14,
    name: 'Транспорт',
    typeId: 1,
  },
  {
    id: 15,
    name: 'Комуналка',
    typeId: 1,
  },
  {
    id: 16,
    name: 'Развлечение',
    typeId: 1,
  },
  {
    id: 17,
    name: 'Канстовары',
    typeId: 1,
  },
  {
    id: 18,
    name: 'Техника',
    typeId: 1,
  },
  {
    id: 19,
    name: 'Товары для дома',
    typeId: 1,
  },
  {
    id: 22,
    name: 'Корректировка',
    typeId: 1,
  },
  {
    id: 23,
    name: 'Продажа',
    typeId: 2,
  },
  {
    id: 24,
    name: 'Зарплата',
    typeId: 2,
  },
  {
    id: 25,
    name: 'Подарили',
    typeId: 2,
  },
  {
    id: 26,
    name: 'Депозит',
    typeId: 2,
  },
  {
    id: 27,
    name: 'Корректировка',
    typeId: 2,
  },
]

const currencyIds = [
  { id: 0, name: 'Гривна' },
  { id: 1, name: 'Доллар' },
  { id: 2, name: 'Евро' },
  { id: 3, name: 'Рубль' },
]

export const normalizeData = (
  id: number,
  variant: 'accountId' | 'typeId' | 'categoryId' | 'currencyId',
): string => {
  switch (variant) {
    case 'accountId':
      return accountIds.find(value => value.id === id).name
    case 'typeId':
      return typeIds.find(value => value.id === id).name
    case 'categoryId':
      return categoryIds.find(value => value.id === id).name
    case 'currencyId':
      return currencyIds.find(value => value.id === id).name
    default:
      return null
  }
}
