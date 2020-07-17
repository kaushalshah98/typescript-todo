export interface IList {
  list: INewItem[];
}
export interface INewItem {
  key: number;
  value: string;
}
export interface IAppProps {}

export interface IAppState {
  list: INewItem[];
  newItem: INewItem;
}
