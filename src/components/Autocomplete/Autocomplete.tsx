import { IResults } from '../../api/search'
import React from 'react'
import { Item } from '../Item/Item'

interface IAutocomplete  {
  results: IResults[]
  onClick: (value: string) => void
}

export const Autocomplete = ({ results, onClick }: IAutocomplete) => {
  return (
    <>
      {results.length > 0 &&
        <div
          className="autocomplete"
          data-testid="autocomplete"
        >
          <ol className="autocomplete__list">
            {results.map((el, index) => (
              <Item
                key={index}
                result={el}
                onClick={onClick}
              />
            ))}
          </ol>
        </div>
      }
    </>
  )
}
