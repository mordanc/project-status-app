export type SelectableListChild = {
  isFocused: boolean;
  onClick(): any;
};

export type SelectableListProps = {
  defaultSelectedIndex?: number;
  className?: string;
};
