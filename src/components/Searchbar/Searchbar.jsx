import SearchbarForm from "./SearchbarForm";
import PropTypes from "prop-types";

import style from "./searchbar.module.css";

function Searchbar(props) {
  const { changeSearch } = props;
  return (
    <header className={style.Searchbar}>
      <SearchbarForm onSubmit={changeSearch} />
    </header>
  );
}

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};
export default Searchbar;
