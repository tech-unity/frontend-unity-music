import { transparentize } from 'polished';
import styled from 'styled-components';
import {
  INPUTS_HEIGHT,
  INPUTS_WIDTH,
  LABELS_FONT_SIZE,
} from '../../_constants';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 19px;

  label.Label {
    font-size: ${LABELS_FONT_SIZE}px;
    font-weight: 600;
    color: #ffffff;
  }

  input {
    height: ${INPUTS_HEIGHT}px;
    width: ${INPUTS_WIDTH}px;
    font-size: 18px;
    font-weight: 500;

    border: none;
    outline: none;

    border-radius: 10px;
    color: #274060;

    background-color: #fff;
    padding: 12px;
  }

  &::placeholder {
    color: ${transparentize(0.5, '#274060')};
  }
`;
