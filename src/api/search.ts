export interface IResults {
  country: string
  city: string
  region: string
  name: string
  iata: string
  placeType: string
}

export interface IResponse {
  hasError: boolean,
  data: IResults[]
}

export const getSearchResults = (term: string, rows: number = 6): Promise<IResponse> => (
  fetch(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${rows}&solrTerm=${encodeURIComponent(term)}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then((responseJson) => {
      return {
        hasError: false,
        data: mapResults(responseJson),
      }
    })
    .catch((error) => {
      console.log(error)
      return {
        hasError: true,
        data: [],
      }
    })
)

export const mapResults = (res: any) => res?.results?.docs.map((el: any): IResults => ({
  country: el?.country || '',
  city: el?.city || '',
  region: el?.region || '',
  name: el?.name || '',
  iata: el?.iata || '',
  placeType: el?.placeType ? getType(el.placeType) : '',
})) || []

export  const getType = (placeType: string): string => {
  let type
  switch (placeType) {
    case 'A':
      type = 'Airport'
      break
    case 'C':
      type = 'City'
      break
    case 'S':
      type = 'Station'
      break
    default:
      type = 'Other'
      break
  }
  return type
}
