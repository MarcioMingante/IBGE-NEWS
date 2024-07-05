import { Link, Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header 
        className="flex justify-center py-4 border-y-2"
        data-testid="header"
      >
        <nav className="space-x-10">
          <Link to='/'>
            Home
          </Link>

          <Link to='/noticias'>
            Notícias
          </Link>

          <Link to='/releases'>
            Releases
          </Link>

          <Link to='/favorites'>
            Favoritas
          </Link>
        </nav>
      </header>
    
      <Outlet />
    </>
  );
}

export default NavLayout;
