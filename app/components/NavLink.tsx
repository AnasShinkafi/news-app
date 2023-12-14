import Link from 'next/link';
import React from 'react'

type Props = {
    category: string;
    isActive: boolean;
};

const NavLink = ({category, isActive}: Props) => {
  return (
    <div>
        <Link className={`navLink ${isActive && 'underline decoration-red-400 underline-offset-4 font-bold text-lg'}`} href={`/news/${category}`}>{category}</Link>
    </div>
  )
}

export default NavLink;