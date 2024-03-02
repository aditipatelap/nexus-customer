import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const categories = [
    {id: 1, title: "Fashion", href: "#"},
    {id: 2, title: "Personal Care", href: "#"},
    {id: 3, title: "Electronics", href: "#"},
    {id: 4, title: "Books", href: "#"},
    {id: 5, title: "Sports", href: "#"},
    {id: 6, title: "Travel", href: "#"},
    {id: 7, title: "Health", href: "#"},
    {id: 8, title: "Office Supplies", href: "#"},
    {id: 9, title: "Maternity", href: "#"},
    {id: 10, title: "Pet", href: "#"},
    {id: 11, title: "Art", href: "#"}
  ];
  
  return (
      <nav className="bg-sky-900 text-white font-poppins px-6 py-2 w-full" >
          <ul className="flex flex-wrap justify-start">
            {categories.map((category) => (
              <li key={category.id} className="mr-4 text-xs xl:text-base 2xl:text-xl text-nowrap">
                <Link to="/home/products" className="nav-link">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
  )
}

export default Nav
