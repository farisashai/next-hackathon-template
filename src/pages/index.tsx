/**
 * Example page component
 */
import Button from '@/components/Button';
import styles from '@/styles/pages/Home.module.scss';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button onClick={() => console.log('Hello World')} text="Hello World" />
    </div>
  );
};

export default Home;
