import { Link, Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header 
        className="flex justify-center py-4 bg-slate-900"
        data-testid="header"
      >
        <nav className="space-x-10 text-white">
          <Link 
            className="hover:text-green-500"
            data-testid="home-link"
            to='/'
          >
            Home
          </Link>

          <Link 
            className="hover:text-green-500"
            data-testid="news-link"
            to='/noticias'
          >
            Notícias
          </Link>

          <Link 
            className="hover:text-green-500"
            data-testid="releases-link"
            to='/releases'
          >
            Releases
          </Link>

          <Link 
            className="hover:text-green-500"
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
