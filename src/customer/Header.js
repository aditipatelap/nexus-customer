import { useState } from "react";

const Header = () => {
  const logoPath = process.env.PUBLIC_URL + "/images/logo/logo_1x.png";
  const searchIconPath = process.env.PUBLIC_URL + "/images/icons/search.png";
  const favoritesIconPath = process.env.PUBLIC_URL + "/images/icons/favorites.png";
  const bagIconPath = process.env.PUBLIC_URL + "/images/icons/bag.png";
  const profileIconPath = process.env.PUBLIC_URL + "/images/icons/profile.png";

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
    setSearchQuery('');
  }

  return (
    <header className="max-w-full header-background text-white p-2 grid grid-cols-2 items-center">
      <div className="flex items-center pl-3">

        {/* Logo */}
        <a href="#">
          <img 
            src={logoPath} 
            alt="Nexus" 
            className="h-14 w-14"
          />
        </a>

        {/* Search Bar */}
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery) }}>
          <div className="relative flex items-center mx-5">
            {/* search icon */}
            <img
              src={searchIconPath}
              alt="Search Icon"
              className=" h-5 w-5 absolute left-3"
            />
            {/* search input field */}
            <input
              type="text"
              placeholder="Search here"
              role="searchbox"
              className="pl-10 py-1.5 pr-96 rounded-full bg-white text-black placeholder-style border border-gray-300 col-span-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* icons on the right */}
        <div className="absolute right-5 space-x-3.5 flex items-center">
          <a href="#">
            <img src={favoritesIconPath} alt="favorites" className="h-10 w-10" />
          </a>
          <a href="#">
            <img src={bagIconPath} alt="bag" className="h-10 w-10" />
          </a>
          <a href="#">
            <img src={profileIconPath} alt="account" className="h-10 w-10" />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header
