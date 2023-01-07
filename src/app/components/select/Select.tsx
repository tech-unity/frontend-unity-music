import { Select, SelectProps } from 'antd';
import { transparentize } from 'polished';
import styled from 'styled-components';
import {
  INPUTS_HEIGHT,
  INPUTS_WIDTH,
  LABELS_FONT_SIZE,
} from '../../_constants';

export interface CustomSelectProps extends SelectProps {
  label: string;
}

export default function CustomSelect(props: CustomSelectProps) {
  return (
    <Wrapper>
      {props.label && <label className='Label'>{props.label}</label>}
      <Select {...props} allowClear style={{ width: '100%' }} showArrow />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  width: ${INPUTS_WIDTH}px;

  label.Label {
    font-size: ${LABELS_FONT_SIZE}px;
    font-weight: 600;
    color: #ffffff;
  }

  &&& .ant-select-selector {
    align-items: center;
    min-height: ${INPUTS_HEIGHT}px;
    padding: 12px;

    transition: 0.25s ease;
    &:hover,
    &:focus {
      cursor: pointer;
      .ant-select-selection-placeholder {
        color: transparent;
        transition: 0.25s ease;
      }
    }
    .ant-select-selection-placeholder {
      font-size: 16px;
      font-weight: 600;
      color: ${() => transparentize(0.5, '#3A3A3A')};
    }
  }
`;
