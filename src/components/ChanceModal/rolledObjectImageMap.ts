import Coin from 'src/images/coin.svg';
import D4 from 'src/images/d4.svg';
import D6 from 'src/images/d6.svg';
import D8 from 'src/images/d8.svg';
import D12 from 'src/images/d12.svg';
import D20 from 'src/images/d20.svg';

import { IChanceOptions } from 'src/types/IChance';

export const rolledObjectImageMap = {
  [IChanceOptions.COIN]: Coin,
  [IChanceOptions.D4]: D4,
  [IChanceOptions.D6]: D6,
  [IChanceOptions.D8]: D8,
  [IChanceOptions.D10]: D8,
  [IChanceOptions.D12]: D12,
  [IChanceOptions.D20]: D20,
};
