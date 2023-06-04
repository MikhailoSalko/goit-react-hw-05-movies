import {
  StyledForm,
  StyledSearchInput,
  StyledSearchButton,
} from './SearchForm.styled';
import PropTypes from 'prop-types';

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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;
