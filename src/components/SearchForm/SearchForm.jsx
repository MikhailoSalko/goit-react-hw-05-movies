import {
  StyledForm,
  StyledSearchInput,
  StyledSearchButton,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit, query = '' }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledSearchInput
        type="text"
        name="search"
        placeholder="Please, enter the movie name"
        defaultValue={query}
      />
      <StyledSearchButton type="submit">Search</StyledSearchButton>
    </StyledForm>
  );
};

export default SearchForm;
