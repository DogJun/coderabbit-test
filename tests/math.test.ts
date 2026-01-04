import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide, average, sum, isEven, isOdd, clamp } from '../src/math'

describe('math utils', () => {
  describe('add', () => {
    it('应该正确计算两个正数的和', () => {
      expect(add(1, 2)).toBe(3)
    })

    it('应该正确计算负数的和', () => {
      expect(add(-1, -2)).toBe(-3)
    })

    it('应该正确处理小数', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3)
    })
  })

  describe('subtract', () => {
    it('应该正确计算两数之差', () => {
      expect(subtract(5, 3)).toBe(2)
    })

    it('应该正确处理负数结果', () => {
      expect(subtract(3, 5)).toBe(-2)
    })
  })

  describe('multiply', () => {
    it('应该正确计算两数之积', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('应该正确处理负数', () => {
      expect(multiply(-3, 4)).toBe(-12)
    })

    it('乘以0应该返回0', () => {
      expect(multiply(5, 0)).toBe(0)
    })
  })

  describe('divide', () => {
    it('应该正确计算两数之商', () => {
      expect(divide(10, 2)).toBe(5)
    })

    it('应该正确处理小数结果', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2)
    })

    it('除数为0时应该抛出错误', () => {
      expect(() => divide(10, 0)).toThrow('除数不能为0')
    })
  })

  describe('average', () => {
    it('应该正确计算平均值', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3)
    })

    it('空数组应该返回0', () => {
      expect(average([])).toBe(0)
    })

    it('单个元素应该返回该元素', () => {
      expect(average([5])).toBe(5)
    })
  })

  describe('sum', () => {
    it('应该正确计算数组总和', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15)
    })

    it('空数组应该返回0', () => {
      expect(sum([])).toBe(0)
    })
  })

  describe('isEven', () => {
    it('偶数应该返回true', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(-4)).toBe(true)
    })

    it('奇数应该返回false', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(-3)).toBe(false)
    })
  })

  describe('isOdd', () => {
    it('奇数应该返回true', () => {
      expect(isOdd(1)).toBe(true)
      expect(isOdd(-3)).toBe(true)
    })

    it('偶数应该返回false', () => {
      expect(isOdd(2)).toBe(false)
      expect(isOdd(0)).toBe(false)
    })
  })

  describe('clamp', () => {
    it('值在范围内应该返回原值', () => {
      expect(clamp(5, 0, 10)).toBe(5)
    })

    it('值小于最小值应该返回最小值', () => {
      expect(clamp(-5, 0, 10)).toBe(0)
    })

    it('值大于最大值应该返回最大值', () => {
      expect(clamp(15, 0, 10)).toBe(10)
    })
  })
})

