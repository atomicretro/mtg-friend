import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

import { ReactComponent as DeleteIcon } from '../../images/delete.svg';

const StyledDeleteButton = styled(ButtonReset)`
`;

interface IDeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton(props: IDeleteButtonProps) {
  const { onClick } = props;

  return (
    <StyledDeleteButton onPointerDown={onClick} type='button'>
      <DeleteIcon />
    </StyledDeleteButton>
  )
};
