export interface ICheckBoxProps {
  inputId: string;
  checked: boolean;
  name: string;
  className?: any;
  label: string;
  required?: boolean;
  onChange?: () => void;
  onClick?: () => void;
}
