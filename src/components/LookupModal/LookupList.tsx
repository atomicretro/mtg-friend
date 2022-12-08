import * as React from 'react';
import styled from 'styled-components';
import { ViewportList } from 'react-viewport-list';

import { LookupItem } from './LookupItem';

import { IMechanic } from 'src/types/IMechanic';

const StyledLookupList = styled.ul`
  line-height: 30px;
  margin: 0;

  &:last-of-type {
    padding-bottom: 20px;
  }
`;

interface ILookupListProps {
  items: IMechanic[];
}

export function LookupList(props: ILookupListProps) {
  const { items } = props;

  return (
    <StyledLookupList>
      <ViewportList items={items}>
        {(item) => <LookupItem key={item.id} {...item} />}
      </ViewportList>
    </StyledLookupList>
  );
};
