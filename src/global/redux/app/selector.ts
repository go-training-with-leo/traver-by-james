import { useAppSelector } from "@/components";

export const loadingSelector = () => useAppSelector(state => state.app.loading)