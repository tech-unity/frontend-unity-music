import Icon from '@mdi/react';
import { Band, Singers } from '../../../sdk/models/Scale';
import * as C from './ScaleCard.styles';

export interface ScaleCardProps {
  position: 'even' | 'odd';
  icon: string;
  isSvg: boolean;
  header: string;
  rotateIcon?: number;

  bandList?: Band[];
  singersList?: Singers[];
}

export default function ScaleCard(props: ScaleCardProps) {
  return (
    <C.ScaleCard position={props.position}>
        <C.IconDiv>
          {props.isSvg && (
            <C.CustomIcon
              src={props.icon}
              alt=''
              rotateIcon={props.rotateIcon || 0}
            ></C.CustomIcon>
          )}
          {!props.isSvg && <Icon path={props.icon}></Icon>}
        </C.IconDiv>
        <C.Header>{props.header}</C.Header>
        <C.List>
          {props.bandList?.map((item, index) => (
            <C.ListItem
              key={index}
            >{`${item.name} - ${item.instrument}`}</C.ListItem>
          ))}

          {props.singersList?.map((item, index) => (
            <C.ListItem key={index}>{`${item.name}`}</C.ListItem>
          ))}
        </C.List>
    </C.ScaleCard>
  );
}
