import { formatPrice } from './index'

test('测试价格单位过滤', () => {
  expect(formatPrice(15000)).toBe('1.5万')
  expect(formatPrice(5000)).toBe('5000元')
  expect(formatPrice(15440)).toBe('1.55万')
})

// 常见断言
// toBe toEqual not.toBe not.toEqual
// toBeGreaterThan toBeGreaterThanOrEqual Less
// 浮点数 toBeCloseTo 字符串 toMatch 数组，可迭代对象toContain

// toBeNull toBeUndefined toBeDefined toBeTruethy toBeFalsy toThrow

// toB
