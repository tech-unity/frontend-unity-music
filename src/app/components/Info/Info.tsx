import { mdiInformation } from '@mdi/js';
import Icon from '@mdi/react';
import { transparentize } from 'polished';
import styled from 'styled-components';

export interface InfoProps {
  title: string;
  description: string;
}

export default function Info({ title, description }: InfoProps) {
  return (
    <InfoWrapper>
      <InfoInnerContent>
        <InfoIcon>
          <Icon path={mdiInformation} size='48px' color='#08f' />
        </InfoIcon>
        <InfoMessages>
          <InfoTitle>{title}</InfoTitle>
          <p>{description}</p>
        </InfoMessages>
      </InfoInnerContent>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f8fa;
  width: 373px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`;

const InfoInnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`;

const InfoIcon = styled.div``;

const InfoMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;
