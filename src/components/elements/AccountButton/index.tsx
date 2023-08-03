import { useState, type FC } from 'react';

import { actions } from './utils';

import * as S from './styles';

const AccountButton: FC = () => {
  const [isOpenSpeedDial, setIsOpenSpeedDial] = useState(false);

  const handleToggleSpeedDial = () => {
    setIsOpenSpeedDial((prevState) => !prevState);
  };

  return (
    <S.StyledSpeedDial
      ariaLabel='Rápido acesso para autenticação'
      open={isOpenSpeedDial}
      icon={isOpenSpeedDial ? <S.CloseIcon /> : <S.SpaIcon />}
      onClick={handleToggleSpeedDial}
      direction='down'
    >
      {actions.map(({ icon, label, path }, index) => (
        <S.StyledSpeedDialAction
          key={`action-${label}-${index}`}
          icon={
            <S.StyledLink href={path}>
              {icon}
            </S.StyledLink>
          }
          tooltipTitle={
            <S.StyledLink href={path}>
              {label}
            </S.StyledLink>
          }
          tooltipPlacement='right'
          tooltipOpen
        />
      ))}
    </S.StyledSpeedDial>
  );
};

export default AccountButton;
