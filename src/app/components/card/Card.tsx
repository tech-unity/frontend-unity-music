import * as C from './Card.styles';

export interface CardProps {
  position: 'even' | 'odd';
  icon: React.ReactNode;
  header: string;
  content: string;
  rotateIcon?: number;
}

export default function Card(props: CardProps) {
  return (
    <C.Card position={props.position}>
      <C.IconDiv>{props.icon}</C.IconDiv>
      <C.Header>{props.header}</C.Header>
      <C.Content>{props.content}</C.Content>
    </C.Card>
  );
}
