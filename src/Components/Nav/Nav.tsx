import { NavLink } from 'react-router-dom';
import '../../styles/GlobalFont.css';

export const Nav = () => {
  const links = [
    { label: 'Hjem', to: '/' },
    { label: 'Advokaterne', to: '/advokaterne' },
    { label: 'Om LeoLov', to: '/om-leolov' },
    { label: 'Kontakt', to: '/kontakt' },
  ];

  return (
    <nav className="w-full h-14 absolute bg-neutral-50 shadow-md">
      <ul className="flex h-full items-center divide-x divide-blue-800">
        {links.map((link) => (
          <li key={link.to} className="px-2 relative left-10">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-normal font-inter ${isActive ? 'text-blue-900 font-semibold underline' : 'text-blue-800'
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
