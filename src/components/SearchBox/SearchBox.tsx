import React, { useState } from 'react'
import { getSearchResults, IResponse, IResults } from '../../api/search'
import { Autocomplete } from '../Autocomplete/Autocomplete'

export const SearchBox = () => {

  const [results, setResults] = useState<IResults[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    if  (value.length >= 2) {
      getSearchResults(e.target.value)
        .then((res: IResponse) => {
          if (!res.hasError) {
            setResults(res.data)
          }
        })
    } else {
      setResults([])
    }
  }

  const handleOnClick = (value: string) => {
    setInputValue(value)
    setResults([])
  }

  return (
    <div className="search-box">
      <h2>Where are you going?</h2>
      <label
        id="search-box-label"
        htmlFor="search-box-input"
      >
        Pick-up Location
      </label>
      <input
        id="search-box-input"
        data-testid="search-box-input"
        className="search-box__input"
        type="text"
        placeholder="city, airport, station, region and district..."
        aria-labelledby="search-box-label"
        onChange={handleOnChange}
        value={inputValue}
      />
      <Autocomplete
        results={results}
        onClick={handleOnClick}
      />
    </div>
  )
}
