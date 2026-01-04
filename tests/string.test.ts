import { describe, it, expect } from 'vitest'
import {
  capitalize,
  toKebabCase,
  toCamelCase,
  toSnakeCase,
  truncate,
  reverse,
  isPalindrome,
  countOccurrences,
  randomString
} from '../src/string'

describe('string utils', () => {
  describe('capitalize', () => {
    it('应该将首字母大写', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    it('空字符串应该返回空字符串', () => {
      expect(capitalize('')).toBe('')
    })

    it('已经大写的字符串应该保持不变', () => {
      expect(capitalize('Hello')).toBe('Hello')
    })
  })

  describe('toKebabCase', () => {
    it('应该将 camelCase 转换为 kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
    })

    it('应该将空格分隔的字符串转换为 kebab-case', () => {
      expect(toKebabCase('hello world')).toBe('hello-world')
    })

    it('应该将下划线分隔的字符串转换为 kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world')
    })
  })

  describe('toCamelCase', () => {
    it('应该将 kebab-case 转换为 camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld')
    })

    it('应该将 snake_case 转换为 camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld')
    })

    it('应该将空格分隔的字符串转换为 camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld')
    })
  })

  describe('toSnakeCase', () => {
    it('应该将 camelCase 转换为 snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world')
    })

    it('应该将 kebab-case 转换为 snake_case', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world')
    })

    it('应该将空格分隔的字符串转换为 snake_case', () => {
      expect(toSnakeCase('hello world')).toBe('hello_world')
    })
  })

  describe('truncate', () => {
    it('短于最大长度的字符串应该保持不变', () => {
      expect(truncate('hello', 10)).toBe('hello')
    })

    it('长于最大长度的字符串应该被截断', () => {
      expect(truncate('hello world', 8)).toBe('hello...')
    })

    it('应该支持自定义后缀', () => {
      expect(truncate('hello world', 8, '…')).toBe('hello w…')
    })
  })

  describe('reverse', () => {
    it('应该反转字符串', () => {
      expect(reverse('hello')).toBe('olleh')
    })

    it('空字符串应该返回空字符串', () => {
      expect(reverse('')).toBe('')
    })
  })

  describe('isPalindrome', () => {
    it('回文字符串应该返回true', () => {
      expect(isPalindrome('racecar')).toBe(true)
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
    })

    it('非回文字符串应该返回false', () => {
      expect(isPalindrome('hello')).toBe(false)
    })

    it('空字符串应该返回true', () => {
      expect(isPalindrome('')).toBe(true)
    })
  })

  describe('countOccurrences', () => {
    it('应该正确计算子串出现次数', () => {
      expect(countOccurrences('hello hello world', 'hello')).toBe(2)
    })

    it('没有匹配应该返回0', () => {
      expect(countOccurrences('hello world', 'foo')).toBe(0)
    })

    it('空子串应该返回0', () => {
      expect(countOccurrences('hello', '')).toBe(0)
    })
  })

  describe('randomString', () => {
    it('应该生成指定长度的字符串', () => {
      expect(randomString(10).length).toBe(10)
    })

    it('应该使用自定义字符集', () => {
      const result = randomString(10, 'abc')
      expect(result).toMatch(/^[abc]+$/)
    })

    it('长度为0应该返回空字符串', () => {
      expect(randomString(0)).toBe('')
    })
  })
})

