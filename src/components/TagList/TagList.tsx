import { styled } from '@linaria/react';
import { Tag, Props as TagProps } from '../Tag';

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
};

const TagList = ({ items }: { items: TagProps[] }) => (
  <StyledTagList>
    {items.map((item) => (
      <li key={item.label}>
        <Tag {...item} />
      </li>
    ))}
  </StyledTagList>
);

export default TagList;
