import { describe, it, expect } from 'vitest'
import { formatDateTime, isLeapYear } from '../src/date'

describe('date utils', () => {
  describe('formatDateTime', () => {
    it('应该正确格式化标准日期时间', () => {
      const date = new Date('2024-01-15T13:45:30')
      expect(formatDateTime(date)).toBe('2024-01-15 13:45:30')
    })

    it('应该正确处理单数月份和日期的零填充', () => {
      const date = new Date('2024-01-05T09:05:05')
      expect(formatDateTime(date)).toBe('2024-01-05 09:05:05')
    })

    it('应该正确处理午夜时间', () => {
      const date = new Date('2024-06-15T00:00:00')
      expect(formatDateTime(date)).toBe('2024-06-15 00:00:00')
    })

    it('应该正确处理午夜前一秒', () => {
      const date = new Date('2024-06-15T23:59:59')
      expect(formatDateTime(date)).toBe('2024-06-15 23:59:59')
    })

    it('应该正确处理年初日期', () => {
      const date = new Date('2024-01-01T00:00:00')
      expect(formatDateTime(date)).toBe('2024-01-01 00:00:00')
    })

    it('应该正确处理年末日期', () => {
      const date = new Date('2024-12-31T23:59:59')
      expect(formatDateTime(date)).toBe('2024-12-31 23:59:59')
    })

    it('应该正确处理闰年2月29日', () => {
      const date = new Date('2024-02-29T12:30:45')
      expect(formatDateTime(date)).toBe('2024-02-29 12:30:45')
    })

    it('应该正确处理世纪之交的日期', () => {
      const date = new Date('2000-01-01T00:00:00')
      expect(formatDateTime(date)).toBe('2000-01-01 00:00:00')
    })

    it('应该正确处理千禧年之前的日期', () => {
      const date = new Date('1999-12-31T23:59:59')
      expect(formatDateTime(date)).toBe('1999-12-31 23:59:59')
    })

    it('应该正确处理当前时间', () => {
      const now = new Date()
      const result = formatDateTime(now)
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      expect(result).toBe(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`)
    })

    it('应该正确处理30天的月份', () => {
      const date = new Date('2024-04-30T15:20:10')
      expect(formatDateTime(date)).toBe('2024-04-30 15:20:10')
    })

    it('应该正确处理31天的月份', () => {
      const date = new Date('2024-07-31T08:45:30')
      expect(formatDateTime(date)).toBe('2024-07-31 08:45:30')
    })

    it('应该正确处理平年2月28日', () => {
      const date = new Date('2023-02-28T10:15:20')
      expect(formatDateTime(date)).toBe('2023-02-28 10:15:20')
    })

    it('应该正确处理上午时间', () => {
      const date = new Date('2024-06-15T06:30:15')
      expect(formatDateTime(date)).toBe('2024-06-15 06:30:15')
    })

    it('应该正确处理下午时间', () => {
      const date = new Date('2024-06-15T18:45:50')
      expect(formatDateTime(date)).toBe('2024-06-15 18:45:50')
    })

    it('应该正确处理正午时间', () => {
      const date = new Date('2024-06-15T12:00:00')
      expect(formatDateTime(date)).toBe('2024-06-15 12:00:00')
    })

    it('应该正确处理各种小时边界值', () => {
      for (let hour = 0; hour < 24; hour++) {
        const date = new Date(2024, 5, 15, hour, 30, 45)
        const hourStr = String(hour).padStart(2, '0')
        expect(formatDateTime(date)).toBe(`2024-06-15 ${hourStr}:30:45`)
      }
    })

    it('应该正确处理各种分钟边界值', () => {
      const testMinutes = [0, 1, 30, 59]
      testMinutes.forEach((minute) => {
        const date = new Date(2024, 5, 15, 12, minute, 30)
        const minuteStr = String(minute).padStart(2, '0')
        expect(formatDateTime(date)).toBe(`2024-06-15 12:${minuteStr}:30`)
      })
    })

    it('应该正确处理各种秒数边界值', () => {
      const testSeconds = [0, 1, 30, 59]
      testSeconds.forEach((second) => {
        const date = new Date(2024, 5, 15, 12, 30, second)
        const secondStr = String(second).padStart(2, '0')
        expect(formatDateTime(date)).toBe(`2024-06-15 12:30:${secondStr}`)
      })
    })

    it('应该正确处理所有12个月份', () => {
      for (let month = 0; month < 12; month++) {
        const date = new Date(2024, month, 15, 12, 30, 45)
        const monthStr = String(month + 1).padStart(2, '0')
        expect(formatDateTime(date)).toContain(`2024-${monthStr}-15`)
      }
    })

    it('应该正确处理较早的历史日期', () => {
      const date = new Date('1900-01-01T00:00:00')
      expect(formatDateTime(date)).toBe('1900-01-01 00:00:00')
    })

    it('应该正确处理未来日期', () => {
      const date = new Date('2100-12-31T23:59:59')
      expect(formatDateTime(date)).toBe('2100-12-31 23:59:59')
    })

    it('应该正确处理不同年份的相同日期时间', () => {
      const years = [2020, 2021, 2022, 2023, 2024]
      years.forEach((year) => {
        const date = new Date(year, 5, 15, 12, 30, 45)
        expect(formatDateTime(date)).toBe(`${year}-06-15 12:30:45`)
      })
    })
  })

  describe('isLeapYear', () => {
    it('能被4整除但不能被100整除的年份应该是闰年', () => {
      expect(isLeapYear(2024)).toBe(true)
      expect(isLeapYear(2020)).toBe(true)
      expect(isLeapYear(2016)).toBe(true)
      expect(isLeapYear(2012)).toBe(true)
      expect(isLeapYear(2008)).toBe(true)
      expect(isLeapYear(2004)).toBe(true)
    })

    it('不能被4整除的年份应该不是闰年', () => {
      expect(isLeapYear(2023)).toBe(false)
      expect(isLeapYear(2022)).toBe(false)
      expect(isLeapYear(2021)).toBe(false)
      expect(isLeapYear(2019)).toBe(false)
      expect(isLeapYear(2018)).toBe(false)
      expect(isLeapYear(2017)).toBe(false)
    })

    it('能被100整除但不能被400整除的年份应该不是闰年', () => {
      expect(isLeapYear(1900)).toBe(false)
      expect(isLeapYear(1800)).toBe(false)
      expect(isLeapYear(1700)).toBe(false)
      expect(isLeapYear(2100)).toBe(false)
      expect(isLeapYear(2200)).toBe(false)
      expect(isLeapYear(2300)).toBe(false)
    })

    it('能被400整除的年份应该是闰年', () => {
      expect(isLeapYear(2000)).toBe(true)
      expect(isLeapYear(1600)).toBe(true)
      expect(isLeapYear(2400)).toBe(true)
    })

    it('应该正确处理世纪之交的特殊情况', () => {
      expect(isLeapYear(2000)).toBe(true)
      expect(isLeapYear(1900)).toBe(false)
      expect(isLeapYear(1800)).toBe(false)
      expect(isLeapYear(1600)).toBe(true)
    })

    it('应该正确处理最近的闰年', () => {
      const recentLeapYears = [2024, 2020, 2016, 2012, 2008, 2004]
      recentLeapYears.forEach((year) => {
        expect(isLeapYear(year)).toBe(true)
      })
    })

    it('应该正确处理最近的平年', () => {
      const recentNonLeapYears = [2023, 2022, 2021, 2019, 2018, 2017]
      recentNonLeapYears.forEach((year) => {
        expect(isLeapYear(year)).toBe(false)
      })
    })

    it('应该正确处理各种4的倍数但不是闰年的情况', () => {
      const nonLeapYearsDivisibleBy4 = [1900, 2100, 2200, 2300, 2500, 2600, 2700, 2900, 3000]
      nonLeapYearsDivisibleBy4.forEach((year) => {
        expect(isLeapYear(year)).toBe(false)
      })
    })

    it('应该正确处理400年周期内的所有400的倍数', () => {
      const leapYearsDivisibleBy400 = [400, 800, 1200, 1600, 2000, 2400, 2800, 3200]
      leapYearsDivisibleBy400.forEach((year) => {
        expect(isLeapYear(year)).toBe(true)
      })
    })

    it('应该正确处理公元1年前后', () => {
      expect(isLeapYear(4)).toBe(true)
      expect(isLeapYear(8)).toBe(true)
      expect(isLeapYear(100)).toBe(false)
      expect(isLeapYear(400)).toBe(true)
    })

    it('应该正确处理奥运年（大多数是闰年）', () => {
      const olympicYears = [1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024]
      olympicYears.forEach((year) => {
        expect(isLeapYear(year)).toBe(true)
      })
    })

    it('应该验证闰年规则的边界条件', () => {
      // 测试闰年规则的三个条件边界
      expect(isLeapYear(1896)).toBe(true)  // 能被4整除
      expect(isLeapYear(1897)).toBe(false) // 不能被4整除
      expect(isLeapYear(1900)).toBe(false) // 能被100整除但不能被400整除
      expect(isLeapYear(2000)).toBe(true)  // 能被400整除
    })

    it('应该正确处理连续年份的闰年判断', () => {
      const years2015to2025 = [
        { year: 2015, isLeap: false },
        { year: 2016, isLeap: true },
        { year: 2017, isLeap: false },
        { year: 2018, isLeap: false },
        { year: 2019, isLeap: false },
        { year: 2020, isLeap: true },
        { year: 2021, isLeap: false },
        { year: 2022, isLeap: false },
        { year: 2023, isLeap: false },
        { year: 2024, isLeap: true },
        { year: 2025, isLeap: false }
      ]
      years2015to2025.forEach(({ year, isLeap }) => {
        expect(isLeapYear(year)).toBe(isLeap)
      })
    })

    it('应该正确处理历史上重要年份', () => {
      expect(isLeapYear(1752)).toBe(true)  // 格里高利历法改革相关
      expect(isLeapYear(1776)).toBe(true)  // 美国独立
      expect(isLeapYear(1789)).toBe(false) // 法国大革命
      expect(isLeapYear(1945)).toBe(false) // 二战结束
      expect(isLeapYear(1969)).toBe(false) // 登月
    })

    it('应该正确处理各个世纪的第一年', () => {
      expect(isLeapYear(1601)).toBe(false)
      expect(isLeapYear(1701)).toBe(false)
      expect(isLeapYear(1801)).toBe(false)
      expect(isLeapYear(1901)).toBe(false)
      expect(isLeapYear(2001)).toBe(false)
      expect(isLeapYear(2101)).toBe(false)
    })

    it('应该正确处理各个世纪的最后一年', () => {
      expect(isLeapYear(1600)).toBe(true)
      expect(isLeapYear(1700)).toBe(false)
      expect(isLeapYear(1800)).toBe(false)
      expect(isLeapYear(1900)).toBe(false)
      expect(isLeapYear(2000)).toBe(true)
      expect(isLeapYear(2100)).toBe(false)
    })

    it('应该正确处理较大的年份数值', () => {
      expect(isLeapYear(10000)).toBe(true)
      expect(isLeapYear(10001)).toBe(false)
      expect(isLeapYear(10004)).toBe(true)
      expect(isLeapYear(10100)).toBe(false)
    })

    it('应该正确处理负年份（如果支持公元前）', () => {
      // 注意：根据ISO 8601标准，公元前1年是0年，公元前2年是-1年
      // 这个测试假设函数也支持负数，实际行为取决于实现
      expect(isLeapYear(0)).toBe(true)   // 公元前1年（0年）是闰年
      expect(isLeapYear(-4)).toBe(true)  // 公元前5年应该是闰年
      expect(isLeapYear(-1)).toBe(false) // 公元前2年不是闰年
    })
  })

  describe('formatDateTime 和 isLeapYear 集成测试', () => {
    it('应该正确格式化闰年2月29日', () => {
      const leapYears = [2024, 2020, 2016, 2012]
      leapYears.forEach((year) => {
        expect(isLeapYear(year)).toBe(true)
        const date = new Date(year, 1, 29, 12, 0, 0) // 2月29日
        const formatted = formatDateTime(date)
        expect(formatted).toContain(`${year}-02-29`)
      })
    })

    it('应该验证平年没有2月29日而闰年有', () => {
      // 闰年：2024-02-29 应该存在
      const leapYearDate = new Date(2024, 1, 29)
      expect(isLeapYear(2024)).toBe(true)
      expect(leapYearDate.getDate()).toBe(29)
      expect(formatDateTime(leapYearDate)).toContain('2024-02-29')

      // 平年：2023-02-29 会自动调整为3月1日
      const nonLeapYearDate = new Date(2023, 1, 29)
      expect(isLeapYear(2023)).toBe(false)
      // JavaScript Date 对象会自动调整无效日期
      expect(nonLeapYearDate.getMonth()).toBe(2) // 变成3月
      expect(nonLeapYearDate.getDate()).toBe(1)  // 变成1日
    })

    it('应该正确处理世纪之交闰年的特殊日期', () => {
      const date2000 = new Date(2000, 1, 29, 12, 0, 0)
      expect(isLeapYear(2000)).toBe(true)
      expect(formatDateTime(date2000)).toBe('2000-02-29 12:00:00')

      // 1900年不是闰年
      expect(isLeapYear(1900)).toBe(false)
    })
  })

  describe('边界条件和错误处理', () => {
    it('formatDateTime应该处理Date对象的所有有效输入', () => {
      // JavaScript Date的有效范围
      const minDate = new Date(-8640000000000000)
      const maxDate = new Date(8640000000000000)
      
      // 只要Date对象有效，应该能格式化
      expect(() => formatDateTime(new Date(0))).not.toThrow()
      expect(() => formatDateTime(new Date())).not.toThrow()
    })

    it('isLeapYear应该处理各种数值输入', () => {
      // 正常年份
      expect(() => isLeapYear(2024)).not.toThrow()
      expect(() => isLeapYear(1)).not.toThrow()
      
      // 边界值
      expect(() => isLeapYear(0)).not.toThrow()
      expect(() => isLeapYear(9999)).not.toThrow()
    })

    it('应该验证formatDateTime输出格式的一致性', () => {
      const testDates = [
        new Date('2024-01-01T00:00:00'),
        new Date('2024-06-15T12:30:45'),
        new Date('2024-12-31T23:59:59')
      ]
      
      testDates.forEach((date) => {
        const result = formatDateTime(date)
        // 验证格式：YYYY-MM-DD HH:mm:ss
        expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      })
    })
  })

  describe('性能和一致性测试', () => {
    it('isLeapYear应该对相同输入返回相同结果', () => {
      const year = 2024
      const results = Array.from({ length: 100 }, () => isLeapYear(year))
      expect(results.every((r) => r === true)).toBe(true)
    })

    it('formatDateTime应该对相同Date对象返回相同结果', () => {
      const date = new Date('2024-06-15T12:30:45')
      const results = Array.from({ length: 100 }, () => formatDateTime(date))
      expect(results.every((r) => r === results[0])).toBe(true)
    })

    it('应该快速处理大量闰年判断', () => {
      const years = Array.from({ length: 1000 }, (_, i) => 1000 + i)
      const startTime = Date.now()
      years.forEach((year) => isLeapYear(year))
      const endTime = Date.now()
      // 应该在合理时间内完成（1000次调用应该很快）
      expect(endTime - startTime).toBeLessThan(100)
    })
  })
})