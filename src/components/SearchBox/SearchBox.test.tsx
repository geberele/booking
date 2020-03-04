import * as React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SearchBox } from './SearchBox'

describe('SearchBox', () => {
  it('renders', () => {
    const { asFragment } = render(<SearchBox />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('TEST 1 - AC1: shows the correct text for the label', () => {
    const { getByLabelText } = render(<SearchBox />)
    const label = getByLabelText(/Pick-up Location/i)
    expect(label).toBeInTheDocument()
  })

  it('TEST 1 - AC2: shows the correct text for the placeholder', () => {
    const { getByPlaceholderText } = render(<SearchBox />)
    const input = getByPlaceholderText(/city, airport, station, region and district.../i)
    expect(input).toBeInTheDocument()
  })

  it('TEST 1 - AC3: applies the focus state', () => {
    const { getByPlaceholderText } = render(<SearchBox />)
    const input = getByPlaceholderText(/city, airport, station, region and district.../i)
    input.focus()
    expect(document.activeElement).toEqual(input)
  })

  it('TEST 1 - AC4: has the input field accessible from screen readers', () => {
    const { container } = render(<SearchBox />)
    const label = container.querySelector(`[id="search-box-label"]`)
    const input = container.querySelector(`[aria-labelledby="search-box-label"]`)
    expect(label).toHaveTextContent('Pick-up Location')
    expect(input).toBeInTheDocument()
  })

  it('TEST 2 - AC1: does not show placeholder and autocomplete when only one character is typed', () => {
    const { container, getByPlaceholderText } = render(<SearchBox />)
    const input = getByPlaceholderText(/city, airport, station, region and district.../i)
    fireEvent.input(input, { target: { value: 'm' } })

    const autocomplete = container.querySelector(`[class="autocomplete"]`)

    expect(input).toHaveValue('m')
    expect(autocomplete).toBeNull()
  })

  it('TEST 2 - AC2: shows autocomplete when 2 alphanumeric characters are typed', async () => {
    const { getByTestId } = render(<SearchBox />)
    const input = getByTestId('search-box-input')
    fireEvent.input(input, { target: { value: 'mi' } })

    const autocomplete = await waitForElement(() => getByTestId('autocomplete'))

    expect(input).toHaveValue('mi')
    expect(autocomplete).toBeVisible()
  })

  it('TEST 2 - AC3: shows autocomplete with maximum 6 items', async () => {
    const { getByTestId, container } = render(<SearchBox />)
    const input = getByTestId('search-box-input')
    fireEvent.input(input, { target: { value: 'mi' } })

    const autocomplete = await waitForElement(() => getByTestId('autocomplete'))
    const items = container.querySelector('ol')

    expect(items?.childElementCount).toBe(6)
  })

  it('TEST 2 - AC4: shows message "No results found" when no items are found', async () => {
    const { getByText, getByTestId } = render(<SearchBox />)
    const input = getByTestId('search-box-input')
    fireEvent.input(input, { target: { value: 'XXXXXXXX' } })

    const noResultsText = await waitForElement(() => getByText(/No results found/))

    expect(noResultsText).toBeInTheDocument()
  })

  it('TEST 2 - AC5: does not show autocomplete when the characters are removed', async () => {
    const { getByTestId, queryByTestId } = render(<SearchBox />)
    const input = getByTestId('search-box-input')
    fireEvent.input(input, { target: { value: 'mi' } })

    const autocomplete = await waitForElement(() => queryByTestId(/autocomplete/i))
    fireEvent.input(input, { target: { value: '' } })

    expect(queryByTestId(/autocomplete/i)).toBeNull()
  })
})
