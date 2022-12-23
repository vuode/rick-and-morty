import { useEffect } from 'react'
import styles from './App.module.scss'
import { CharactersTable } from './components/CharactersTable'
import { useAppDispatch, useAppSelector } from './hooks/store'
import {
  getCharacters,
  getPageNumber,
  getStatus,
} from './store/features/characters/charactersSelectors'
import { fetchCharacters } from './store/features/characters/charactersSlice'

export const App = () => {
  const dispatch = useAppDispatch()

  const status = useAppSelector(getStatus)
  const page = useAppSelector(getPageNumber)
  const data = useAppSelector(getCharacters)

  useEffect(() => {
    void dispatch(fetchCharacters(1))
  }, [])

  if (!data || status !== 'ready') {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Characters</h1>
      <CharactersTable data={data} />
      <div>
        <button onClick={() => dispatch(fetchCharacters(1))}>1</button>
        <button onClick={() => dispatch(fetchCharacters(2))}>2</button>
        <button onClick={() => dispatch(fetchCharacters(3))}>3</button>
        <button onClick={() => dispatch(fetchCharacters(4))}>4</button>
      </div>
    </div>
  )
}
