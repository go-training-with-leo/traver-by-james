export interface IInputProps {
  label: string;
  type?: 'password' | 'normal';
  onChangeText?: (text: string) => void;
}
