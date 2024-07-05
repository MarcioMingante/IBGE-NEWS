import { Link, Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header 
        className="flex justify-center py-4 border-y-2"
        data-testid="header"
      >
        <nav className="space-x-10">
          <Link 
            data-testid="home-link"
            to='/'
            >
            Home
          </Link>

          <Link 
            data-testid="news-link"
            to='/noticias'
            >
            Notícias
          </Link>

          <Link 
            data-testid="releases-link"
            to='/releases'
            >
            Releases
          </Link>

          <Link 
            data-testid="favorites-link"
            to='/favorites'          
          >
            Favoritas
          </Link>
        </nav>
      </header>
    
      <Outlet />
    </>
  );
}

export default NavLayout;
