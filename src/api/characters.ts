import axios from 'axios'

interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharacterLocation {
  name: string
  url: string
}

export interface Character extends Record<string, any> {
  id: number
  name: string
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  image: string
}

interface CharacterResponse {
  info?: Info
  results?: Character[]
}

export interface CharacterFilter {
  name?: string
  species?: string
  status?: 'Dead' | 'Alive' | 'unknown'
  page?: number
}

const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
  method: 'GET',
})

export const getCharacters = async (page: number) => {
  const response = await client({
    params: {
      page,
    },
  })

  if (response.status === 200) {
    return response.data as CharacterResponse
  }

  throw new Error(`Request failed with code ${response.status}`)
}
