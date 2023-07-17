import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import style from './searchbarForm.module.css';

class SearchbarForm extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.setState({
      search: '',
    });
  };
  render() {
    const { handleChange, handleSubmit, state } = this;
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
  }
}

SearchbarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchbarForm;
