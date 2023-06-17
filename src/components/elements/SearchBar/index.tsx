import { useState, useDeferredValue, type FC } from 'react';

import { useSearch } from '@hooks/index';
import { type SearchResults } from '@hooks/useSearch/utils';

import { StyledModal } from '@components/elements';

import Results from './Results';

import * as S from './styles';

const SearchBar: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const startAdornment = <S.StyledInputAdorment position='start'><S.SearchIcon /></S.StyledInputAdorment>;
  const placeholder = 'Pesquise por pessoas ou grupos...';

  const { handleSearch } = useSearch();
  const deferredValue = useDeferredValue(searchValue);

  const { data, isLoading } = handleSearch(deferredValue);

  const handleToggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <S.StyledInput
        placeholder={placeholder}
        InputProps={{ startAdornment }}
        onFocus={handleToggleModal}
      />
      <StyledModal
        isOpen={isOpenModal}
        handleToggleModal={handleToggleModal}
        modalTitle='Barra de Pesquisa'
        content={
          <Results
            results={data as SearchResults}
            isLoading={isLoading}
          >
            <S.StyledInput
              placeholder={placeholder}
              InputProps={{ startAdornment }}
              value={searchValue}
              onChange={({ target: { value } }) => setSearchValue(value)}
            />
          </Results>
        }
      />
    </>
  );
};

export default SearchBar;
