import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import type { RootState, AppDispatch } from '../store'

type UseAppDispatch = () => AppDispatch
type UseAppSelector = TypedUseSelectorHook<RootState>

export const useAppDispatch: UseAppDispatch = useDispatch
export const useAppSelector: UseAppSelector = useSelector
