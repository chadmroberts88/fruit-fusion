import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleWrapper = styled.div`
  position: relative;
  justify-self: center;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 9vmin;
  height: 5vmin;
  border-radius: 20px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 4vmin;
    height: 4vmin;
    margin: 0.5vmin;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: margin-left 0.2s;
  }
`;

const ToggleInput = styled.input.attrs({
    type: 'checkbox'
})`
  opacity: 0;
  z-index: 1;
  border-radius: 20px;
  width: 4vmin;
  height: 4vmin;
  &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 4vmin;
      height: 4vmin;
      margin-left: 4.5vmin;
      transition: margin-left 0.2s;
    }
  }
`;

const ToggleSwitch = ({ toggleId }) => {
    return (
        <ToggleWrapper>
            <ToggleInput id={toggleId} defaultChecked={true} />
            <ToggleLabel id={`${toggleId}-label`} htmlFor={toggleId} />
        </ToggleWrapper>
    )
}

export default ToggleSwitch