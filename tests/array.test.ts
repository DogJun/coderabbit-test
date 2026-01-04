import { describe, it, expect } from 'vitest'
import {
  unique,
  chunk,
  flatten,
  flattenDeep,
  last,
  first,
  shuffle,
  intersection,
  difference,
  groupBy,
  sample
} from '../src/array'

describe('array utils', () => {
  describe('unique', () => {
    it('应该返回唯一值数组', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    })

    it('没有重复值应该返回原数组', () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('空数组应该返回空数组', () => {
      expect(unique([])).toEqual([])
    })
  })

  describe('chunk', () => {
    it('应该正确分块', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    it('分块大小大于数组长度应该返回单个分块', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]])
    })

    it('分块大小为0或负数应该抛出错误', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow('分块大小必须大于0')
      expect(() => chunk([1, 2, 3], -1)).toThrow('分块大小必须大于0')
    })
  })

  describe('flatten', () => {
    it('应该扁平化一层嵌套', () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5])
    })

    it('混合数组应该只扁平化一层', () => {
      expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
    })
  })

  describe('flattenDeep', () => {
    it('应该深度扁平化数组', () => {
      expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
    })
  })

  describe('last', () => {
    it('应该返回最后一个元素', () => {
      expect(last([1, 2, 3])).toBe(3)
    })

    it('空数组应该返回undefined', () => {
      expect(last([])).toBeUndefined()
    })
  })

  describe('first', () => {
    it('应该返回第一个元素', () => {
      expect(first([1, 2, 3])).toBe(1)
    })

    it('空数组应该返回undefined', () => {
      expect(first([])).toBeUndefined()
    })
  })

  describe('shuffle', () => {
    it('应该返回相同长度的数组', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(shuffle(arr).length).toBe(arr.length)
    })

    it('应该包含相同的元素', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(shuffle(arr).sort()).toEqual(arr.sort())
    })

    it('不应该修改原数组', () => {
      const arr = [1, 2, 3, 4, 5]
      const original = [...arr]
      shuffle(arr)
      expect(arr).toEqual(original)
    })
  })

  describe('intersection', () => {
    it('应该返回两个数组的交集', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
    })

    it('没有交集应该返回空数组', () => {
      expect(intersection([1, 2], [3, 4])).toEqual([])
    })
  })

  describe('difference', () => {
    it('应该返回两个数组的差集', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
    })

    it('第一个数组的元素都在第二个数组中应该返回空数组', () => {
      expect(difference([1, 2], [1, 2, 3])).toEqual([])
    })
  })

  describe('groupBy', () => {
    it('应该根据指定属性分组', () => {
      const arr = [
        { type: 'a', value: 1 },
        { type: 'b', value: 2 },
        { type: 'a', value: 3 }
      ]
      expect(groupBy(arr, 'type')).toEqual({
        a: [
          { type: 'a', value: 1 },
          { type: 'a', value: 3 }
        ],
        b: [{ type: 'b', value: 2 }]
      })
    })
  })

  describe('sample', () => {
    it('应该返回数组中的一个元素', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(arr).toContain(sample(arr))
    })

    it('空数组应该返回undefined', () => {
      expect(sample([])).toBeUndefined()
    })
  })
})

