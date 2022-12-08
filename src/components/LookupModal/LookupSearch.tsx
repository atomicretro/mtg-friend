import * as React from 'react';
import styled from 'styled-components';

import { DeleteButton } from '../Buttons/DeleteButton';
import { LookupItem } from './LookupItem';

import { IMechanic } from 'src/types/IMechanic';

const StyledLookupModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;

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

  .results {
    position: absolute;
    top: 68px;
    width: 100%;
    background: white;
    border: 1px solid #000;
    border-radius: 8px;

    h3 {
      margin: 20px 0px 8px 20px;
    }

    ul {
      line-height: 30px;
      margin: 0 0 20px 15px;
    }
  }
`;

function NullResult() {
  return <li><span>None</span></li>;
}

interface ILookupSearchProps {
  allMechanics: IMechanic[];
}

export function LookupSearch(props: ILookupSearchProps) {
  const { allMechanics } = props;
  const [searchString, setSearchString] = React.useState('');

  const results = React.useMemo(() => (
    allMechanics.reduce((results: React.ReactNode[], mechanic: IMechanic, idx: number) => {
      if (mechanic.name.toLowerCase().includes(searchString)) {
        return results.concat(<LookupItem key={idx} {...mechanic} />);
      } else {
        return results;
      }
    }, [])
  ), [allMechanics, searchString]);

  const maybeRenderResults = () => {
    if (searchString.length > 2) {
      return (
        <div className='results'>
          <h3>Search Results</h3>
          <ul>{results.length > 0 ? results : <NullResult />}</ul>
        </div>
      );
    }

    return null;
  };

  return (
    <StyledLookupModal>
      <label htmlFor='search_mechanics'>Search by name:</label>
      <div className='input-group'>
        <input
          id='search_mechanics'
          onChange={(e) => setSearchString(e.target.value)}
          type='text'
          value={searchString}
        />

        <DeleteButton onClick={() => setSearchString('')} />
      </div>

      {maybeRenderResults()}
    </StyledLookupModal>
  )
}
