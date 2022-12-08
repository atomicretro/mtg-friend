import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../../providers/ModalProvider';

import { LookupList } from './LookupList';
import { LookupSearch } from './LookupSearch';
import { Modal } from '../Modal';

import { ModalBottomCloseButton } from '../Buttons/ModalBottomCloseButton';
import { ModalTopCloseButton } from '../Buttons/ModalTopCloseButton';
import { GoUpButton } from '../Buttons/GoUpButton';
import { JumpToButton } from '../Buttons/JumpToButton';

import { ABILITIES } from '../../constants/abilities';
import { COUNTERS } from '../../constants/counters';
import {
  KEYWORDS_ACTIONS,
  KEYWORDS_ACTIVATED,
  KEYWORDS_CHARACTERISTIC,
  KEYWORDS_EVASION,
  KEYWORDS_SPELL,
  KEYWORDS_STATIC,
  KEYWORDS_TRIGGERED,
} from '../../constants/keywords';
import { MISC } from '../../constants/misc';

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

  .jump-to {
    .buttons {
      font-size: 14px;
      line-height: 26px;
    }
  }
`;

export function LookupModal() {
  const { closeModal } = useModalContext();

  const allMechanics = React.useMemo(() => (
    ABILITIES.concat(
      COUNTERS,
      KEYWORDS_ACTIONS,
      KEYWORDS_ACTIVATED,
      KEYWORDS_CHARACTERISTIC,
      KEYWORDS_EVASION,
      KEYWORDS_SPELL,
      KEYWORDS_STATIC,
      KEYWORDS_TRIGGERED,
      MISC,
    )
  ), []);

  const executeScroll = React.useCallback((ref: React.RefObject<HTMLHeadingElement | HTMLDivElement>) => {
    ref?.current?.scrollIntoView();
  }, []);

  const modalRef = React.useRef<HTMLDivElement>(null);
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
    <StyledLookupModal ref={modalRef}>
      <ModalTopCloseButton onClick={closeModal} />
      <h2>MTG Glossary</h2>

      <LookupSearch allMechanics={allMechanics} />

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
      <LookupList items={ABILITIES} />

      <h3 ref={countersRef}>Counters</h3>
      <LookupList items={COUNTERS} />

      <h3>Keywords</h3>
      <h4 ref={kwActionsRef}>Keyword Actions</h4>
      <LookupList items={KEYWORDS_ACTIONS} />
      <h4 ref={kwActivatedRef}>Activated Keywords</h4>
      <LookupList items={KEYWORDS_ACTIVATED} />
      <h4 ref={kwCharacteristicsRef}>Characteristic Keywords</h4>
      <LookupList items={KEYWORDS_CHARACTERISTIC} />
      <h4 ref={kwEvasionRef}>Evasion Keywords</h4>
      <LookupList items={KEYWORDS_EVASION} />
      <h4 ref={kwSpellRef}>Spell Keywords</h4>
      <LookupList items={KEYWORDS_SPELL} />
      <h4 ref={kwStaticRef}>Static Keywords</h4>
      <LookupList items={KEYWORDS_STATIC} />
      <h4 ref={kwTriggeredRef}>Triggered Keywords</h4>
      <LookupList items={KEYWORDS_TRIGGERED} />

      <h3 ref={miscRef}>Misc. Mechanics</h3>
      <LookupList items={MISC} />

      <GoUpButton onClick={() => executeScroll(modalRef)} />
      <ModalBottomCloseButton onClick={closeModal} />
    </StyledLookupModal>
  );
};
