import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../providers/ModalProvider';

import { Modal } from './Modal';
import { CloseButton } from './Buttons/CloseButton';
import { DeleteButton } from './Buttons/DeleteButton';
import { JumpToButton } from './Buttons/JumpToButton';
import { GoUpButton } from './Buttons/GoUpButton';

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
  h3 {
    margin: 20px 0 8px;
  }
  h4 {
    margin: 20px 0 8px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ul {
    line-height: 30px;
    margin: 0;

    &:last-of-type {
      padding-bottom: 20px;
    }
  }

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

  .jump-to {
    .buttons {
      font-size: 14px;
      line-height: 26px;
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

  const executeScroll = React.useCallback((ref: React.RefObject<HTMLHeadingElement>) => {
    ref?.current?.scrollIntoView();
  }, []);

  const topOfPageRef = React.useRef<HTMLHeadingElement>(null);
  const abilitiesRef = React.useRef<HTMLHeadingElement>(null);
  const countersRef = React.useRef<HTMLHeadingElement>(null);
  const kwActionsRef = React.useRef<HTMLHeadingElement>(null);
  const kwActivatedRef = React.useRef<HTMLHeadingElement>(null);
  const kwCharacteristicsRef = React.useRef<HTMLHeadingElement>(null);
  const kwEvasionRef = React.useRef<HTMLHeadingElement>(null);
  const kwSpellRef = React.useRef<HTMLHeadingElement>(null);
  const kwStaticRef = React.useRef<HTMLHeadingElement>(null);
  const kwTriggeredRef = React.useRef<HTMLHeadingElement>(null);
  const miscRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <StyledLookupModal>
      <CloseButton onClick={closeModal} />
      <h2 ref={topOfPageRef}>MTG Glossary</h2>

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

      <div className='jump-to'>
        <h3>Jump to</h3>
        <div className='buttons'>
          <JumpToButton onClick={() => executeScroll(abilitiesRef)}>Abilities</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(countersRef)}>Counters</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwActionsRef)}>Keyword Actions</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwActivatedRef)}>Activated Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwCharacteristicsRef)}>Characteristic Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwEvasionRef)}>Evasion Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwSpellRef)}>Spell Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwStaticRef)}>Static Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(kwTriggeredRef)}>Triggered Keywords</JumpToButton>
          &nbsp;/&nbsp;
          <JumpToButton onClick={() => executeScroll(miscRef)}>Misc. Mechanics</JumpToButton>
        </div>
      </div>

      <h3 ref={abilitiesRef}>Abilities</h3>
      <ul>{abilities.length > 0 ? abilities.map(LookupItem) : <NullResult />}</ul>

      <h3 ref={countersRef}>Counters</h3>
      <ul>{counters.length > 0 ? counters.map(LookupItem) : <NullResult />}</ul>

      <h3>Keywords</h3>
      <h4 ref={kwActionsRef}>Keyword Actions</h4>
      <ul>{kwActions.length > 0 ? kwActions.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwActivatedRef}>Activated Keywords</h4>
      <ul>{kwActivated.length > 0 ? kwActivated.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwCharacteristicsRef}>Characteristic Keywords</h4>
      <ul>{kwCharacteristics.length > 0 ? kwCharacteristics.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwEvasionRef}>Evasion Keywords</h4>
      <ul>{kwEvasion.length > 0 ? kwEvasion.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwSpellRef}>Spell Keywords</h4>
      <ul>{kwSpell.length > 0 ? kwSpell.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwStaticRef}>Static Keywords</h4>
      <ul>{kwStatic.length > 0 ? kwStatic.map(LookupItem) : <NullResult />}</ul>
      <h4 ref={kwTriggeredRef}>Triggered Keywords</h4>
      <ul>{kwTriggered.length > 0 ? kwTriggered.map(LookupItem) : <NullResult />}</ul>

      <h3 ref={miscRef}>Misc. Mechanics</h3>
      <ul>{misc.length > 0 ? misc.map(LookupItem) : <NullResult />}</ul>

      <GoUpButton onClick={() => executeScroll(topOfPageRef)} />
    </StyledLookupModal>
  );
};
