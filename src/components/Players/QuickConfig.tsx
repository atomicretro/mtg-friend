import * as React from 'react';
import styled from 'styled-components';

import { ModalTypes, useModalContext } from 'src/providers/ModalProvider';
import { usePlayerContext } from 'src/providers/PlayerProvider';

import { IconButton } from 'src/components/Buttons/IconButton';

import { ReactComponent as DiceIcon } from 'src/images/dice.svg';
import { ReactComponent as GearIcon } from 'src/images/gear.svg';
import { ReactComponent as MagnifyIcon } from 'src/images/magnify.svg';
import { ReactComponent as MoonIcon } from 'src/images/moon.svg';
import { ReactComponent as ResetIcon } from 'src/images/reset.svg';
import { ReactComponent as SunIcon } from 'src/images/sun.svg';

const StyledQuickConfig = styled.li<{ order: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  order: ${({ order }) => order};
  margin: 0 20px;
  user-select: none;

  .button-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface IQuickConfigProps {
  order: number;
}

export function QuickConfig(props: IQuickConfigProps) {
  const { order } = props;
  const { openModal } = useModalContext();
  const { resetAllLifeTotals } = usePlayerContext();

  const [dayTime, setDayTime] = React.useState(true);

  return (
    <StyledQuickConfig order={order}>
        <IconButton onClick={resetAllLifeTotals} className='reset'>
          <ResetIcon />
        </IconButton>

        <IconButton onClick={() => setDayTime((prevDayTime) => !prevDayTime)} className='time'>
          {dayTime ? <SunIcon /> : <MoonIcon />}
        </IconButton>

        <IconButton onClick={() => openModal(ModalTypes.CHANCE)} className='chance'>
          <DiceIcon />
        </IconButton>

        <IconButton onClick={() => openModal(ModalTypes.LOOKUP)} className='menu'>
          <MagnifyIcon />
        </IconButton>

        <IconButton onClick={() => openModal(ModalTypes.SETTINGS)} className='settings'>
          <GearIcon />
        </IconButton>
    </StyledQuickConfig>
  );
};
