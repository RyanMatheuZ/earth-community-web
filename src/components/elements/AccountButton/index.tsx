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
      onOpen={handleToggleSpeedDial}
      onClose={handleToggleSpeedDial}
      direction='down'
    >
      {actions.map(({ icon, label }) => (
        <S.StyledSpeedDialAction
          key={label}
          icon={icon}
          tooltipOpen
          tooltipTitle={label}
          tooltipPlacement='right'
        />
      ))}
    </S.StyledSpeedDial>
  );
};

export default AccountButton;
