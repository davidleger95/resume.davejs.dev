import { styled } from '@linaria/react';
import { Tag, Props as TagProps } from '../Tag';
import { useState } from 'react';
import { Button } from '../Button';

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export type Props = {
  items: TagProps[];
  limit?: number;
};

const TagList = ({ items, limit = 8 }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const hasMoreItems = limit < items.length;

  const visibleItems = showAll ? items : items.slice(0, limit);

  return (
    <StyledTagList>
      {visibleItems.map((item) => (
        <li key={item.label}>
          <Tag {...item} />
        </li>
      ))}
      <li>
        {hasMoreItems && (
          <Button
            title={showAll ? 'collapse' : 'show all'}
            onClick={toggleShowAll}
          >
            {showAll ? <>&minus;</> : <>+</>}
          </Button>
        )}
      </li>
    </StyledTagList>
  );
};
export default TagList;
