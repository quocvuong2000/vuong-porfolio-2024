'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const NavItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'Resume',
    path: '/resume',
  },
  {
    title: 'Work',
    path: '/work',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-10">
      {NavItems.map((el, idx) => {
        return (
          <Link
            href={el.path}
            key={idx}
            className={twMerge(
              'font-semibold text-lg border-b-2 border-transparent tracking-wider',
              'hover:text-primary-oceanblue hover:border-primary-oceanblue',
              pathname === el.path &&
                'text-primary-oceanblue border-b-2 border-primary-oceanblue'
            )}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
