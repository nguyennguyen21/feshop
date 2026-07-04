import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <Link
      to={href}
      className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}

export default NavItem;