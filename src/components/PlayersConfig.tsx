import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '../providers/ConfigProvider';
import { usePlayerContext } from '../providers/PlayerProvider';

import { IconButton } from './Buttons/IconButton';

import { ReactComponent as GearIcon } from '../images/gear.svg';
import { ReactComponent as MagnifyIcon } from '../images/magnify.svg';
import { ReactComponent as MoonIcon } from '../images/moon.svg';
import { ReactComponent as ResetIcon } from '../images/reset.svg';
import { ReactComponent as SunIcon } from '../images/sun.svg';

const StyledPlayersConfig = styled.div<{ order: number }>`
  // display: grid;
  // grid-template-columns: auto auto;
  // grid-template-rows: auto auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-wrap: wrap;
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

interface IPlayersConfigProps {
  order: number;
}

export function PlayersConfig(props: IPlayersConfigProps) {
  const { order } = props;
  const { openSettingsModal } = useConfigContext();
  const { resetAllLifeTotals } = usePlayerContext();

  const [dayTime, setDayTime] = React.useState(true);

  return (
    <StyledPlayersConfig order={order}>
        <IconButton onClick={resetAllLifeTotals} className='reset'>
          <ResetIcon />
        </IconButton>

        <IconButton onClick={() => setDayTime((prevDayTime) => !prevDayTime)} className='time'>
          {dayTime ? <SunIcon /> : <MoonIcon />}
        </IconButton>

        <IconButton onClick={() => {}} className='menu'>
          <MagnifyIcon />
        </IconButton>

        <IconButton onClick={openSettingsModal} className='settings'>
          <GearIcon />
        </IconButton>
    </StyledPlayersConfig>
  );
};