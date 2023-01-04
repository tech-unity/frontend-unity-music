import styled from 'styled-components';
import { transparentize } from 'polished';
import { BACKGROUND_COLOR } from '../../_constants';

const COLORS = {
  red: '#F84735',
  primary: '#0099FF',
  foreground: '#274060',
};

const THEME = {
  danger: {
    bg: '#F84735',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgb(0,0,0,.1);
    `,
    disabled: {
      color: COLORS.red,
      bg: transparentize(0.75, COLORS.red),
    },
  },
  primary: {
    bg: '#FFFFFF',
    color: '#000000',
    onHover: `
      box-shadow: 0 3px 6px rgb(2,3,3,.1);
    `,
    disabled: {
      color: '#FFF',
      bg: transparentize(0.44, COLORS.primary),
    },
  },
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060;
    `,
    disabled: {
      color: COLORS.foreground,
      bg: transparentize(0.44, '#508AC9'),
    },
  },
};

export const Wrapper = styled.button<{
  variant: 'danger' | 'primary' | 'text';
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${p => THEME[p.variant].bg};
  border-radius: 5px;

  font-size: 16px;
  width: 220px;
  height: 32px;

  color: ${p => THEME[p.variant].color};
  background-color: ${p => THEME[p.variant].bg};

  cursor: pointer;

  transition: 0.5s ease;

  &:hover,
  &:focus {
    ${p => THEME[p.variant].onHover}
    background-color: ${BACKGROUND_COLOR};
    color: ${p => THEME[p.variant].bg};
  }

  &:disabled {
    background-color: ${p => THEME[p.variant].disabled.bg};
    color: ${p => THEME[p.variant].disabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;
