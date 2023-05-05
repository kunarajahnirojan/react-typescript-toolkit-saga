export interface IDatePickerProps {
  value: any;
  id: string;
  name: string;
  className?: string;
  format?: string;
  onChange?: () => void;
  required?: boolean;
}
