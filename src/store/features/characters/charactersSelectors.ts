import { type RootState } from '../..'

const getAllCharacters = (state: RootState) => state.characters.characters
const getLength = (state: RootState) => state.characters.info.length
export const getPageNumber = (state: RootState) =>
  state.characters.info.currentPage
export const getPagesCount = (state: RootState) => state.characters.info.pages
export const getPageContent = (state: RootState) => {
  const characters = getAllCharacters(state)
  const length = getLength(state)
  const pageNumber = getPageNumber(state)
  const offset = length * (pageNumber - 1)
  const ids = Array.from({ length }, (_, index) => offset + index + 1)

  return ids.map((id) => characters[id])
}
