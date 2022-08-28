import { Card, Content, CustomIcon, Header, IconDiv } from './VrCard.styles';
import Icon from '@mdi/react';

export interface VrCardProps {
  position: 'even' | 'odd';
  icon: string;
  isSvg: boolean;
  header: string;
  content: string;
  rotateIcon?: number;
}

export default function VrCard(props: VrCardProps) {
  return (
    <Card position={props.position}>
      <IconDiv>
        {props.isSvg && <CustomIcon src={props.icon} alt='' rotateIcon={props.rotateIcon || 0}></CustomIcon>}
        {!props.isSvg && <Icon path={props.icon}></Icon>}
      </IconDiv>
      <Header>{props.header}</Header>
      <Content>{props.content}</Content>
    </Card>
  );
}
