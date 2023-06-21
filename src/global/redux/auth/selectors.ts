import { useAppSelector } from '@/components';

export const userSelector = () => useAppSelector(state => state.auth.user);
export const authSelector = () => useAppSelector(state => state.auth);