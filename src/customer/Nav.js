import React from 'react'

const Nav = () => {
  const categories = [
    {title: "Fashion", href: "#"},
    {title: "Personal Care", href: "#"},
    {title: "Electronics", href: "#"},
    {title: "Books", href: "#"},
    {title: "Sports", href: "#"},
    {title: "Travel", href: "#"},
    {title: "Health", href: "#"},
    {title: "Office Supplies", href: "#"},
    {title: "Maternity", href: "#"},
    {title: "Pet", href: "#"},
    {title: "Art", href: "#"}
  ];
  return (
    <nav className="bg-sky-900 text-white font-poppins pl-6 py-2 w-full">
        <ul className="flex space-x-7">
          {categories.map((category) => (
            <li>
              <a href={category.href} className="nav-link">{category.title}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Nav
