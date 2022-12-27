import Coin from 'src/images/coin.svg';
import D4 from 'src/images/d4.svg';
import D6 from 'src/images/d6.svg';
import D8 from 'src/images/d8.svg';
import D12 from 'src/images/d12.svg';
import D20 from 'src/images/d20.svg';

import { EChanceOptions } from 'src/types/IChance';

export const rolledObjectImageMap = {
  [EChanceOptions.COIN]: Coin,
  [EChanceOptions.D4]: D4,
  [EChanceOptions.D6]: D6,
  [EChanceOptions.D8]: D8,
  [EChanceOptions.D10]: D8,
  [EChanceOptions.D12]: D12,
  [EChanceOptions.D20]: D20,
};
