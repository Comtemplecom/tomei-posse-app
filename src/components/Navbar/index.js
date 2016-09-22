import React from 'react';
import styles from './styles.css';
import Button from '../../components/Button';
import { Link } from 'react-router';

function Navbar ({ openModal }) {
  return (
    <nav className={styles.wrapper}>
      <Button label='Adicionar novo documento' onClick={openModal} dark />
      <Link to="/area-restrita/novo-usuario">
        <Button label='Adicionar novo usuário' dark />
      </Link>
      <span className={styles.title}>Admin</span>
    </nav>
  );
}

export default Navbar;
