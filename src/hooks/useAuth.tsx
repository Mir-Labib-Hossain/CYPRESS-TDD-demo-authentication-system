import { RootState } from "../redux/app/store";
import { useAppSelector } from "./../redux/app/hooks";

export default function useAuth() {
  const session = useAppSelector((state: RootState) => state.persistedReducer.authSlice.session);

  return session;
}
