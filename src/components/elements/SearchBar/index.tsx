import { type FC } from 'react';

import { StyleInput, SearchIcon, StyledInputAdorment } from './styles';

const SearchBar: FC = () => {
  return (
    <StyleInput
      placeholder='Pesquise por pessoas ou grupos...'
      InputProps={{
        startAdornment: <StyledInputAdorment position='start'>
          <SearchIcon />
        </StyledInputAdorment>
      }}
    />
  );
};

export default SearchBar;
