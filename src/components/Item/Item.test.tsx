import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Item, IItemProps } from './Item'

describe('Item', () => {
  it('renders with all the props', () => {
    const props: IItemProps = {
      result: {
        country: 'Italy',
        city: 'Milan',
        region: 'Lombardy',
        name: 'Milan Malpensa Airport',
        iata: 'MXP',
        placeType: 'Airport',
      },
      onClick: () => {
        return
      },
    }
    const { asFragment } = render(<Item {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with "No results found"', () => {
    const props: IItemProps = {
      result: {
        country: '',
        city: '',
        region: '',
        name: 'No results found',
        iata: '',
        placeType: '',
      },
      onClick: () => {
        return
      },
    }
    const { asFragment } = render(<Item {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
