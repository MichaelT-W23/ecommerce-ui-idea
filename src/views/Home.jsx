import RouterBtn from '../components/RouterBtn'
import styles from '../styles/views/Home.module.css';

function HomePage() {
  return (
    <div>
      <p className={styles['home-title']}>HOME PAGE</p>
      <RouterBtn path="/second-page" buttonText="Go to 2nd page" />
    </div>
  );
}

export default HomePage;
