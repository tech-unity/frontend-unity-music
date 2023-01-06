import { Calendar, CalendarProps } from 'antd';
import { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { INPUTS_WIDTH, LABELS_FONT_SIZE } from '../../_constants';

export interface CustomCalendarProps extends CalendarProps<Dayjs> {
  label: string;
}

export function CustomCalendar(props: CustomCalendarProps) {
  function disableAllDatesExceptSaturdays(currentDate: Dayjs): boolean {
    return currentDate.day() !== 6;
  }

  return (
    <Wrapper>
      {props.label && <label className='Label'>{props.label}</label>}
      <Calendar
        fullscreen={false}
        {...props}
        disabledDate={disableAllDatesExceptSaturdays}
      />
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
`;
