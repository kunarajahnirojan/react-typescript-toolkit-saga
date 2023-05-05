export interface IButtonProps {
  label: string;
  icon?: any;
  iconPosition?: any;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: any;
  tooltip?: any;
  visible?: boolean;
  badge?: string;
  badgeClassName?: string;
  className: string;
  type: any;
  onChange?: () => void;
  onClick?: () => void;
}
