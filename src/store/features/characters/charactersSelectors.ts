import { type RootState } from '../..'

export const getStatus = (state: RootState) => state.characters.info.status
export const getCharacters = (state: RootState) => state.characters.characters
export const getPagesCount = (state: RootState) => state.characters.info.pages
export const getPageNumber = (state: RootState) =>
  state.characters.info.currentPage
