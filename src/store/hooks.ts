import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { appDispatch, rootState } from './store';

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
