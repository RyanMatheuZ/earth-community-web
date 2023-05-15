import { type FC } from 'react';

import { contacts } from '@utils/datas/contacts';

import { ContactContainer, IconContainer } from './styles';
import { ListTitle, ListText } from '../styles';

const Contacts: FC = () => {
  return (
    <ul>
      <li>
        <ListTitle>
          Contatos
        </ListTitle>
      </li>
      {contacts.map(({ icon, label, value }, index) => (
        <li key={`contact-${label}-${index}`}>
          <ContactContainer>
            <IconContainer>
              {icon}
            </IconContainer>
            <ListText>
              {value}
            </ListText>
          </ContactContainer>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
