const triangle = require('./triangle')

describe('triangle', () => {
  it('passes included test cases', () => {
    expect(triangle('GB')).toBe('R')
    expect(triangle('RRR')).toBe('R')
    expect(triangle('RGBG')).toBe('B')
    expect(triangle('RBRGBRB')).toBe('G')
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toBe('G')
    expect(triangle('B')).toBe('B')
  })

  it('works with length two', () => {
    expect(triangle('GG')).toBe('G')
  })

  it('fails', () => {
    expect(triangle('GB')).not.toBe('G') // because it passed first time I wanted to check....
  })
})