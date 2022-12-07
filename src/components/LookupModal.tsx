import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../providers/ModalProvider';

import { Modal } from './Modal';
import { CloseButton } from './Buttons/CloseButton';
import { DeleteButton } from './Buttons/DeleteButton';

import { ABILITIES } from '../constants/abilities';
import { COUNTERS } from '../constants/counters';
import {
  KEYWORDS_ACTIONS,
  KEYWORDS_ACTIVATED,
  KEYWORDS_CHARACTERISTIC,
  KEYWORDS_EVASION,
  KEYWORDS_SPELL,
  KEYWORDS_STATIC,
  KEYWORDS_TRIGGERED,
} from '../constants/keywords';
import { MISC } from '../constants/misc';

const StyledLookupModal = styled(Modal)`
  .search {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin: 0 0 5px 0;
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 10px;

      input {
        flex-grow: 1;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 8px;
        padding: 6px;
      }
    }
  }
`;

interface IMechanic {
  id: string;
  name: string;
}

function LookupItem({ id, name }: IMechanic) {
  return (
    <li key={id}>
      <a href={`https://mtg.fandom.com/wiki/${id}`} rel='noreferrer' target='_blank'>{name}</a>
    </li>
  )
}

function NullResult() {
  return <li><span>None</span></li>;
}

export function LookupModal() {
  const { closeModal } = useModalContext();

  const [searchString, setSearchString] = React.useState('');

  const search = React.useCallback((mechanic: IMechanic) => (
    mechanic.name.toLowerCase().includes(searchString)
  ), [searchString]);

  const abilities = React.useMemo(() => ABILITIES.filter(search), [search]);
  const counters = React.useMemo(() => COUNTERS.filter(search), [search]);
  const kwActions = React.useMemo(() => KEYWORDS_ACTIONS.filter(search), [search]);
  const kwActivated = React.useMemo(() => KEYWORDS_ACTIVATED.filter(search), [search]);
  const kwCharacteristics = React.useMemo(() => KEYWORDS_CHARACTERISTIC.filter(search), [search]);
  const kwEvasion = React.useMemo(() => KEYWORDS_EVASION.filter(search), [search]);
  const kwSpell = React.useMemo(() => KEYWORDS_SPELL.filter(search), [search]);
  const kwStatic = React.useMemo(() => KEYWORDS_STATIC.filter(search), [search]);
  const kwTriggered = React.useMemo(() => KEYWORDS_TRIGGERED.filter(search), [search]);
  const misc = React.useMemo(() => MISC.filter(search), [search]);

  return (
    <StyledLookupModal>
      <CloseButton onClick={closeModal} />
      <h2>MTG Glossary</h2>

      <div className='search'>
        <label htmlFor='search_mechanics'>Look up by name:</label>
        <div className='input-group'>
          <input
            id='search_mechanics'
            onChange={(e) => setSearchString(e.target.value)}
            type='text'
            value={searchString}
          />

          <DeleteButton onClick={() => setSearchString('')} />
        </div>
      </div>

      <h3>Abilities</h3>
      <ul>{abilities.length > 0 ? abilities.map(LookupItem) : <NullResult />}</ul>

      <h3>Counters</h3>
      <ul>{counters.length > 0 ? counters.map(LookupItem) : <NullResult />}</ul>

      <h3>Keywords</h3>
      <h4>Keyword Actions</h4>
      <ul>{kwActions.length > 0 ? kwActions.map(LookupItem) : <NullResult />}</ul>
      <h4>Activated Keywords</h4>
      <ul>{kwActivated.length > 0 ? kwActivated.map(LookupItem) : <NullResult />}</ul>
      <h4>Characteristic Keywords</h4>
      <ul>{kwCharacteristics.length > 0 ? kwCharacteristics.map(LookupItem) : <NullResult />}</ul>
      <h4>Evasion Keywords</h4>
      <ul>{kwEvasion.length > 0 ? kwEvasion.map(LookupItem) : <NullResult />}</ul>
      <h4>Spell Keywords</h4>
      <ul>{kwSpell.length > 0 ? kwSpell.map(LookupItem) : <NullResult />}</ul>
      <h4>Static Keywords</h4>
      <ul>{kwStatic.length > 0 ? kwStatic.map(LookupItem) : <NullResult />}</ul>
      <h4>Triggered Keywords</h4>
      <ul>{kwTriggered.length > 0 ? kwTriggered.map(LookupItem) : <NullResult />}</ul>

      <h3>Misc. Mechanics</h3>
      <ul>{misc.length > 0 ? misc.map(LookupItem) : <NullResult />}</ul>

    </StyledLookupModal>
  );
};
