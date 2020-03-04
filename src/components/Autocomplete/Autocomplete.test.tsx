import { render } from '@testing-library/react'
import * as React from 'react'
import { Autocomplete, IAutocomplete } from './Autocomplete'

describe('Autocomplete', () => {
  it('renders', () => {
    const props: IAutocomplete = {
      results: [
        {
          country: 'Italy',
          city: 'Milan',
          region: 'Lombardy',
          name: 'Milan Malpensa Airport',
          iata: 'MXP',
          placeType: 'Airport',
        },
        {
          country: 'Italy',
          city: '',
          region: 'Lombardia',
          name: 'Milan',
          iata: '',
          placeType: 'City',
        },
        {
          country: 'Italy',
          city: 'Milan',
          region: 'Lombardy',
          name: 'Milan Linate Airport',
          iata: 'LIN',
          placeType: 'Airport',
        },
        {
          country: 'Italy',
          city: 'Bergamo',
          region: 'Lombardy',
          name: 'Bergamo Airport',
          iata: 'BGY',
          placeType: 'Airport',
        },
        {
          country: 'Italy',
          city: 'Milan',
          region: 'Lombardy',
          name: 'Milan - Central Train Station',
          iata: '',
          placeType: 'Other',
        },
        {
          country: 'Italy',
          city: 'Milano',
          region: 'Lombardy',
          name: 'Gallaratese',
          iata: '',
          placeType: 'Other',
        },
      ],
      onClick: () => {
        return
      },
    }
    const { asFragment } = render(<Autocomplete {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})