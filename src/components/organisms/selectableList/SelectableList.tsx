import {
  useState,
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
} from 'react';

type SelectableListChild = {
  isFocused: boolean;
  onClick(): any;
};

type SelectableListProps = {
  defaultSelectedIndex?: number;
  className?: string;
};

/**
 * Accepts any React Element and renders them in a list. If the children have an 'isFocused' prop, this will toggle it when the element is clicked.
 * if the element has an 'onClick' method, it will be called on click in addition to setting this elements state variable.
 *
 * @param defaultSelectedIndex - this element's 'isFocused' prop will be set to true on first render
 */
const SelectableList: React.FC<SelectableListProps> = ({
  defaultSelectedIndex,
  children,
  className,
}) => {
  const [selectedChildIndex, setSelectedChildIndex] = useState(-1);

  useEffect(() => {
    setSelectedChildIndex(defaultSelectedIndex ?? -1);
  }, [defaultSelectedIndex]);

  return (
    <div className={className}>
      {Children.map(children, (child, i) => {
        const listItem = child as ReactElement<
          PropsWithChildren<SelectableListChild>
        >;

        const isFocused = selectedChildIndex === i;
        const onClick = () => {
          setSelectedChildIndex(i);
          listItem.props.onClick?.();
        };

        return cloneElement(listItem, { isFocused, onClick });
      })}
    </div>
  );
};

export default SelectableList;
