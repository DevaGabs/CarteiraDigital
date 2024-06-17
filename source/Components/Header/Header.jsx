import Image from 'next/image';
import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu';
import useMenu from '../../hooks/useMenu';
import AddSalary from './modais/AddSalary';

const Header = () => {
  const [isVisible, toggleMenuHandler] = useMenu();

  return (
    <>
      <AddSalary />

      <section className={styles.header}>
        <div className={styles.message}>
          <h1>Olá! Bem vindo ao projeto</h1>
          <h2>Carteira Digital (teste tecnico)</h2>
        </div>
        <div className={styles.avatar}>
          <Image
            src='/avatar.png'
            alt='avatar'
            layout='fill'
            onClick={toggleMenuHandler}
          />
          {isVisible && <HeaderMenu toggleMenuHandler={toggleMenuHandler} />}
        </div>
      </section>
    </>
  );
};

export default Header;
