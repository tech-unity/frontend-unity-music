import { Person } from '../../../sdk/models/Person';
import { Band, Song } from '../../../sdk/models/Scale';
import * as C from './ScaleCard.styles';

export interface ScaleCardProps {
  position: 'even' | 'odd';
  icon?: React.ReactNode;
  header: string;

  bandList?: Band[];
  singersList?: Person[];
  songsList?: Song[];
}

export default function ScaleCard(props: ScaleCardProps) {
  return (
    <C.ScaleCard position={props.position}>
      {props.icon && <C.IconDiv>{props.icon}</C.IconDiv>}
      <C.Header>{props.header}</C.Header>
      <C.List>
        {props.bandList?.map((item, index) => (
          <C.ListItem
            key={index}
          >{`${item.person.name} - ${item.instrument.name}`}</C.ListItem>
        ))}

        {props.songsList?.map((item, index) => (
          <C.ListItem key={index}>
            {<C.StyledLink href={item.src}>{item.name}</C.StyledLink>}
          </C.ListItem>
        ))}

        {props.singersList?.map((item, index) => {
          if (item.isMinister) {
            return (
              <C.ListItem key={index}>{`${item.name} - Ministro`}</C.ListItem>
            );
          }
          return <C.ListItem key={index}>{`${item.name} - Vocal`}</C.ListItem>;
        })}
      </C.List>
    </C.ScaleCard>
  );
}
