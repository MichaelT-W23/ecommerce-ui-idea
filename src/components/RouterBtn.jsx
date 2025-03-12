import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/components/RouterBtn.module.css';

function RouterBtn({ path, buttonText }) {
  return (
    <Link to={path} className={styles.button}>
      {buttonText}
    </Link>
  );
}

RouterBtn.propTypes = {
  path: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RouterBtn;
