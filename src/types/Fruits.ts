export const Fruits = {
  BANANA: 'banana',
  CHERRY: 'cherry',
  GRAPE: 'grape',
  KIWI: 'kiwi',
  LEMON: 'lemon',
  PEAR: 'pear',
  STRAWBERRY: 'strawberry',
  WATERMELON: 'watermelon',
} as const;

export type Fruit = typeof Fruits[keyof typeof Fruits]