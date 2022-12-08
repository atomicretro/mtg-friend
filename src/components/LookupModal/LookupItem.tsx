import * as React from 'react';

import { IMechanic } from 'src/types/IMechanic';

export function LookupItem({ id, name }: IMechanic) {
  return (
    <li key={id}>
      <a href={`https://mtg.fandom.com/wiki/${id}`} rel='noreferrer' target='_blank'>{name}</a>
    </li>
  )
}
