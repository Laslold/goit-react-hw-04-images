import { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import style from './searchbarForm.module.css';

const SearchbarForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <ImSearch />
          {/* <span className={style.SearchFormButtonLabel}>Search</span> */}
        </button>

        <input
          onChange={handleChange}
          value={state.search}
          name="search"
          className={style.SearchFormInput}
          type="text"
          title="The request must contain only letters, apostrophe, dashes and spaces"
          placeholder="Search images and photos"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </form>
    </div>
  );
};

SearchbarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchbarForm;
