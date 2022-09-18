import Icon from '@mdi/react';
import * as C from './Card.styles';

export interface CardProps {
  position: 'even' | 'odd';
  icon: string;
  isSvg: boolean;
  header: string;
  content: string;
  rotateIcon?: number;
}

export default function Card(props: CardProps) {
  return (
    <C.Card position={props.position}>
      <C.IconDiv>
        {props.isSvg && <C.CustomIcon src={props.icon} alt='' rotateIcon={props.rotateIcon || 0}></C.CustomIcon>}
        {!props.isSvg && <Icon path={props.icon}/>}
      </C.IconDiv>
      <C.Header>{props.header}</C.Header>
      <C.Content>{props.content}</C.Content>
    </C.Card>
  );
}
