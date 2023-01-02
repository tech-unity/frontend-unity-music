import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import styled from 'styled-components';
import { INPUTS_WIDTH, LABELS_FONT_SIZE } from '../../_constants';

export interface CustomCheckboxProps {
  onChange?: (e: CheckboxChangeEvent) => void;
  label: string;
}

export default function CustomCheckbox(props: CustomCheckboxProps) {
  return (
    <Label>
      <StyledCheckbox onChange={props.onChange}></StyledCheckbox>
      {props.label}
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  width: ${INPUTS_WIDTH}px;

  font-size: ${LABELS_FONT_SIZE}px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox {
    top: 0.2rem;
  }

  .ant-checkbox-inner {
    background-color: transparent;
  }
`;
