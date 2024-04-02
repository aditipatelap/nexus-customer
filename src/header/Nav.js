import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const categories = [
    {id: 1, title: "Fashion", href: "Apparel and Fashion"},
    {id: 2, title: "Personal Care", href: "Beauty and Personal Care"},
    {id: 3, title: "Electronics", href: "Electronics"},
    {id: 4, title: "Books", href: "Books and Media"},
    {id: 5, title: "Sports", href: "Sports and Outdoors"},
    {id: 6, title: "Travel", href: "Travel and Luggage"},
    {id: 7, title: "Health", href: "Health and Wellness"},
    {id: 8, title: "Office Supplies", href: "Office Supplies"},
    {id: 9, title: "Maternity", href: "Baby and Maternity"},
    {id: 10, title: "Pet", href: "Pet Supplies"},
    {id: 11, title: "Art", href: "Art and Craft"}
  ];
  
  return (
      <nav className="bg-sky-900 text-white font-poppins px-6 py-2 w-full" >
          <ul className="flex flex-wrap justify-start">
            {categories.map((category) => (
              <li key={category.id} className="mr-4 text-xs xl:text-base 2xl:text-xl text-nowrap">
                <Link to={`/home/products/${category.href}`} className="hover:text-[#f5efef] hover:underline focus:text-[#f5efef] focus:underline">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
  )
}

export default Nav
