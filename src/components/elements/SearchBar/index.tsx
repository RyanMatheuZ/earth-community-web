import { type FC } from 'react';

import * as S from './styles';

const SearchBar: FC = () => {
  return (
    <S.StyleInput
      placeholder='Pesquise por pessoas ou grupos...'
      InputProps={{
        startAdornment: <S.StyledInputAdorment position='start'>
          <S.SearchIcon />
        </S.StyledInputAdorment>
      }}
    />
  );
};

export default SearchBar;
