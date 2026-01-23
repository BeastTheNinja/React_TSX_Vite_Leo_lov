import { Link } from 'react-router';
import '../../styles/GlobalFont.css';

export const Nav = () => {
  const Links = ['Hjem', 'Advokaterne', 'Om LeoLov', 'Kontakt'];

  return (
    <nav className="w-full h-14 absolute bg-neutral-50 shadow-md">
      <ul className="flex h-full items-center divide-x divide-blue-800">
        {Links.map((link) => (
          <li key={link} className="px-2 relative left-10">
            <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-blue-800 text-xs font-normal font-inter"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
