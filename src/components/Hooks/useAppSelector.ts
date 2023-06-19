import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/core/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector