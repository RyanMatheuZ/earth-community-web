import { type FC } from 'react';

import { contacts } from '@utils/datas/contacts';

import * as S from './styles';
import * as FooterS from '../styles';

const Contacts: FC = () => {
  return (
    <ul>
      <li>
        <FooterS.ListTitle>
          Contatos
        </FooterS.ListTitle>
      </li>
      {contacts.map(({ icon, label, value }, index) => (
        <li key={`contact-${label}-${index}`}>
          <S.ContactContainer>
            <S.IconContainer>
              {icon}
            </S.IconContainer>
            <FooterS.ListText>
              {value}
            </FooterS.ListText>
          </S.ContactContainer>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
