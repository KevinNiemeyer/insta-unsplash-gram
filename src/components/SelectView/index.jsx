//need to create select view functionality and styling

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { LayoutContext } from '../../App';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 155px;
  font-size: 16px;
  align-items: center;
  padding: 10px 0 15px 0;

  margin-bottom: 20px;
  background-color: rgb(250, 250, 250);
  & h3 {
    width: 100%;
    text-align: left;
  }
`;

const RadioGroup = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  & li {
    margin: 0 0 0 0;
    width: 85px;
    height: 35px;
    position: relative;
    &:hover {
      background: rgb(255, 0, 0, 0.7);
    }
    &:active {
      font-size: 0.9rem;
    }
  }
  & label,
  & input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &[type='radio'] {
      opacity: 0.01;
      z-index: 100;
      &:checked + label {
        background: rgb(255, 0, 0);
      }
    }
  }
`;
const HR = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
`;

export class SelectView extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {(value) => {
          return (
            <ButtonContainer id='select-view-container'>
              <h3>View:</h3>

              <RadioGroup className='selectButtons'>
                <li>
                  <input
                    type='radio'
                    id='grid'
                    onChange={value.toggleView}
                    name='isGrid'
                    checked={value.isGrid ? true : false}
                  />
                  <label for='grid'>Grid</label>
                </li>

                <li>
                  <input
                    type='radio'
                    id='column'
                    onChange={value.toggleView}
                    name='isColumn'
                    checked={value.isColumn ? true : false}
                  />
                  <label for='column'>Column</label>
                </li>
              </RadioGroup>
            </ButtonContainer>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
}

export default SelectView;
