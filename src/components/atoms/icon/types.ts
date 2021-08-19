export interface IconProps {
  iconSize: 'lg' | 'md' | 'sm';
  iconType:
    | 'folder'
    | 'warning'
    | 'info'
    | 'thumbsUp'
    | 'plus'
    | 'lock'
    | 'x'
    | 'circle'
    | 'edit';
  iconColor?: 'white' | 'black' | 'green' | 'yellow' | 'red';
}
