import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckIcon } from 'src/images/check.svg';
import { ReactComponent as CloseIcon } from 'src/images/close.svg';

const StyledCheckBox = styled.div`
  position: relative;
  outline: 0;
  height: 50px;
  min-width: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #000000;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  
  input {
    appearance: none;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    z-index: 1;
  }

  .checkbox-icon {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 50%;
    margin: auto;
  }
`;

interface ICheckBoxProps {
  checked: boolean;
  id: string;
  onChange: () => void;
}

export function CheckBox(props: ICheckBoxProps) {
  const { checked, id, onChange } = props;

  return (
    <StyledCheckBox>
      <input
        checked={checked}
        id={id}
        onChange={onChange}
        type='checkbox'
      />
      {
        checked
          ? <CheckIcon className='checkbox-icon true' />
          : <CloseIcon className='checkbox-icon false' />
      }
    </StyledCheckBox>
  );
};
