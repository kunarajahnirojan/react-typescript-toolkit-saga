export interface IResourceTableProps {
  createRoute?: any;
  viewRoute?: any;
  editRoute?: any;
  columns: any;
  data: any;
  loading?: boolean;
  deleteAction?: () => void;
  loadData?: (page: number, perpage: number) => void;
  pagination?: any;
}
