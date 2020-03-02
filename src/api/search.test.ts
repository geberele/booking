import { getType } from './search'

describe('getType', () =>  {
  it('returns the value Airport', () =>  {
    expect(getType('A')).toBe('Airport')
  })

  it('returns the value City', () =>  {
    expect(getType('C')).toBe('City')
  })

  it('returns the value Station', () =>  {
    expect(getType('S')).toBe('Station')
  })

  it('returns the value Other', () =>  {
    expect(getType('V')).toBe('Other')
  })
})