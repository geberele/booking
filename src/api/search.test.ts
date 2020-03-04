import { getType, mapResults } from './search'

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

describe('mapResults', () => {
  it('returns the correct values', () => {
    expect(mapResults({
      results: {
        docs: [{
          country: 'Italy',
          city: 'Milan',
          region: 'Lombardy',
          name: 'Milan Malpensa Airport',
          iata: 'MXP',
          placeType: 'A',
        }],
      },
    })).toStrictEqual([{
      country: 'Italy',
      city: 'Milan',
      region: 'Lombardy',
      name: 'Milan Malpensa Airport',
      iata: 'MXP',
      placeType: 'Airport',
    }])
  })

  it('returns the correct empty values', () => {
    expect(mapResults({
      results: {
        docs: [{}],
      },
    })).toStrictEqual([{
      country: '',
      city: '',
      region: '',
      name: '',
      iata: '',
      placeType: '',
    }])
  })

  it('returns an empty array', () => {
    expect(mapResults({
      results: {
        docs: [],
      },
    })).toStrictEqual([])
  })
})
