import Link from "next/link"; 

const Navbar = () => {
  return (
    <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-header">
      <h1 className="webName d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        KRYSTA
      </h1>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link href="/" className="nav-link" aria-current="page">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/solutions" className="nav-link">
            Solutions
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

