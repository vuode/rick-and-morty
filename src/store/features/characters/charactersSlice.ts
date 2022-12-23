import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type Character, getCharacters } from '../../../api/characters'

interface State {
  info: {
    status: 'init' | 'ready' | 'loading' | 'error'
    count: number
    pages: number
    currentPage: number
  }
  characters: Character[] | null
}

const initialState: State = {
  info: {
    status: 'init',
    count: 0,
    pages: 0,
    currentPage: 0,
  },
  characters: null,
}

export const fetchCharacters = createAsyncThunk(
  'fetchCharacters',
  async (page: number) => {
    const response = await getCharacters(page)
    return { ...response, page }
  },
)

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.info.status = 'loading'
    })
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.info.status = 'error'
    })
    builder.addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      state.info.status = 'ready'

      if (!payload.info || !payload.results) {
        state.info.status = 'error'
        return
      }

      const { info, results, page } = payload

      state.info.count = info.count
      state.info.pages = info.pages
      state.info.currentPage = page
      state.characters = results
    })
  },
})

export default charactersSlice.reducer
