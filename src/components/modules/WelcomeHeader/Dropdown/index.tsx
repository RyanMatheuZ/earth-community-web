import { useState, type FC, type MouseEvent } from 'react';

import Link from 'next/link';

import { IconButton, Menu } from '@mui/material';

import { MenuIcon } from '@components/elements';

import { dropdownItems } from '../utils';

import * as S from './styles';

const Dropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpenMenu = !!anchorEl;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id='dropdown'
        open={isOpenMenu}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={S.paperProps}
        transformOrigin={S.transformOrigin}
        anchorOrigin={S.anchorOrigin}
      >
        {dropdownItems.map(({ icon, label, path, target }, index) => (
          <Link
            key={`dropdown-${label}-${index}`}
            href={path}
            target={target}
          >
            <S.StyledMenuItem onClick={handleClose}>
              {icon} {label}
            </S.StyledMenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default Dropdown;
