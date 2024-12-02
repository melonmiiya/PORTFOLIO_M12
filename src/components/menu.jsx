import { Link, useLocation } from 'react-router-dom';
export default function Menu() {
 const currentPage = useLocation().pathname;
  return (
    <nav className="main-menu"> 
        <div>
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
        </div>
        <div>
          <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
        </div>
       <div>
          <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </div>
        <div>
          <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
        </div>
    </nav>
  );
}