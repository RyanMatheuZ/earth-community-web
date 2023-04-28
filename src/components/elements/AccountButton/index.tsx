import { useState, type FC } from 'react';

import { actions } from './utils';

import { StyledSpeedDial, StyledSpeedDialAction, SpaIcon, CloseIcon } from './styles';

const AccountButton: FC = () => {
  const [isOpenSpeedDial, setIsOpenSpeedDial] = useState(false);

  const handleToggleSpeedDial = () => {
    setIsOpenSpeedDial((prevState) => !prevState);
  };

  return (
    <StyledSpeedDial
      ariaLabel='Rápido acesso para autenticação'
      open={isOpenSpeedDial}
      icon={isOpenSpeedDial ? <CloseIcon /> : <SpaIcon />}
      onOpen={handleToggleSpeedDial}
      onClose={handleToggleSpeedDial}
      direction='down'
    >
      {actions.map(({ icon, label }) => (
        <StyledSpeedDialAction
          key={label}
          icon={icon}
          tooltipOpen
          tooltipTitle={label}
          tooltipPlacement='right'
        />
      ))}
    </StyledSpeedDial>
  );
};

export default AccountButton;
