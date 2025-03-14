import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import '../Styles/main.scss';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Ressursarkiv</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 Ressursarkiv</p>
      </footer>
    </div>
  );
}
