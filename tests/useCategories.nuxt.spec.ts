import { expect, test } from 'vitest'
import type { Categories } from '../types/types'
import { useCategories } from '../composables/useCategories'

const { getCategoryPath } = useCategories();

const CategoriesMock: Categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
]

test('test 1', () => {
  const path = getCategoryPath(CategoriesMock, 'category4');
  expect(path).toBe('/category1/category3/category4');
})

test('test 2', () => {
  const path = getCategoryPath(CategoriesMock, 'category2');
  expect(path).toBe('/category1/category2');
})

test('test 3', () => {
  const path = getCategoryPath(CategoriesMock, 'category5');
  expect(path).toBe('/category5');
})