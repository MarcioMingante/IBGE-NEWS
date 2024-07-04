import { Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <>
      <header>
        <nav>
          {/* links com os filtros das noticias */}
          <h1 className="text-2xl border-y-4">Hello world</h1>
        </nav>
      </header>
    
      <Outlet />
    </>
  );
}

export default NavLayout;
