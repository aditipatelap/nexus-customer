import React from 'react'

const BestSeller = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/products";

  const bestSellingItems = [
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
  ];

  return (
    <div className="mx-6 mb-8">
      {/* Title */}
      <div className="color-3F3939 flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl sm:text-xl xs:text-lg text-wrap">BEST SELLER</h1>
        <a href="#">
          <p className="font-poppins underline text-black hover:text-blue-600">view all</p>
        </a>
      </div>

      {/* Items list */}
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5">
        {bestSellingItems.map((product, id) => (
            <a href="#">
                <div key={id} className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col item-hover">
                    {/* add image */}
                    <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-start">
                        <img src={product.src} alt="product" className="h-full w-full object-contain"/>
                    </div>
                    {/* price details */}
                    <div className="flex mt-4 px-2 items-end space-x-1 flex-wrap">
                        <p className="font-poppins text-3xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-sky-900">${product.price - (product.price * product.discount / 100)}</p>
                        <p className="font-poppins line-through text-gray-500">${product.price}</p>
                        <p className="font-poppins text-xl md:text-lg sm:text-base xs:text-base font-bold text-green-600">{product.discount}%</p>
                    </div>
                    {/* image title */}
                    <h2 className="font-poppins font-semibold mt-2 text-wrap px-2">
                        {product.title.length > 60 ? product.title.slice(0, 60) + '...' : product.title}
                    </h2>
                </div>
            </a>
        ))}
      </div>

    </div>
  )
}

export default BestSeller