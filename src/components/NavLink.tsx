import { NavLinkProps } from "../types/NavLink";

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon, onClick }) => {
  return (
    <a
      href={href}
      className=" top-0 flex items-center justify-center px-4 py-2 font-pixel rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors w-[180px] text-center"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>} {label}
    </a>
  );
};

export default NavLink;
