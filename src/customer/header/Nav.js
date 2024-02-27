import React from 'react'

const Nav = ({ isProfileClicked }) => {
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
  const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};

  return (
    <div style={blurStyle}>
      <nav className="bg-sky-900 text-white font-poppins px-6 py-2 w-full" >
          <ul className="flex flex-wrap justify-start">
            {categories.map((category) => (
              <li className="mr-4 text-xs xl:text-base 2xl:text-xl text-nowrap">
                <a href={category.href} className="nav-link">{category.title}</a>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  )
}

export default Nav
