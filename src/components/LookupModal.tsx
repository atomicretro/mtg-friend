import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../providers/ModalProvider';

import { Modal } from './Modal';
import { CloseButton } from './Buttons/CloseButton';

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
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0 5px;

    label {
      font-size: 18px;
      user-select: none;
    }
  }
`;

function LookupItem({ id, name }: { id: string, name: string }) {
  return (
    <li key={id}>
      <a href={`https://mtg.fandom.com/wiki/${id}`} rel='noreferrer' target='_blank'>{name}</a>
    </li>
  )
}

export function LookupModal() {
  const { closeModal } = useModalContext();

  return (
    <StyledLookupModal>
      <CloseButton onClick={closeModal} />
      <h2>MTG Glossary</h2>

      <h3>Abilities</h3>
      <ul>{ABILITIES.map(LookupItem)}</ul>

      <h3>Counters</h3>
      <ul>{COUNTERS.map(LookupItem)}</ul>

      <h3>Keywords</h3>
      <h4>Keyword Actions</h4>
      <ul>{KEYWORDS_ACTIONS.map(LookupItem)}</ul>
      <h4>Activated Keywords</h4>
      <ul>{KEYWORDS_ACTIVATED.map(LookupItem)}</ul>
      <h4>Characteristic Keywords</h4>
      <ul>{KEYWORDS_CHARACTERISTIC.map(LookupItem)}</ul>
      <h4>Evasion Keywords</h4>
      <ul>{KEYWORDS_EVASION.map(LookupItem)}</ul>
      <h4>Spell Keywords</h4>
      <ul>{KEYWORDS_SPELL.map(LookupItem)}</ul>
      <h4>Static Keywords</h4>
      <ul>{KEYWORDS_STATIC.map(LookupItem)}</ul>
      <h4>Triggered Keywords</h4>
      <ul>{KEYWORDS_TRIGGERED.map(LookupItem)}</ul>

      <h3>Misc. Mechanics</h3>
      <ul>{MISC.map(LookupItem)}</ul>

    </StyledLookupModal>
  );
};
