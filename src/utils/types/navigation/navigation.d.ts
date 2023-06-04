import { RootStackParamList } from './type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
