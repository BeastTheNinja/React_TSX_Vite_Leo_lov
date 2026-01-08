export const Nav = () => {
  const Links = ['Hjem', 'Advokaterne', 'Om LeoLov', 'Kontakt'];

  return (
    <nav className="w-full h-14 absolute bg-neutral-50 shadow-md">
      <ul className="flex h-full items-center divide-x divide-neutral-300">
        {Links.map((link) => (
          <li key={link} className="px-2 relative left-10">
            <a
              href={`#${link.toLowerCase()}`}
              className="text-blue-800 text-xs font-normal font-inter"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
