import React from 'react'

const BestSeller = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/products";

  const bestSellingItems = [
    {img: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {img: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {img: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {img: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20}
  ];

  return (
    <div className="mx-6 mt-8">
      {/* Title */}
      <div className="color-3F3939 flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl">BEST SELLER</h1>
        <a href="#">
          <p className="font-poppins underline text-black hover:text-blue-600">view all</p>
        </a>
      </div>

      {/* Items list */}
      <div className="grid grid-cols-4 gap-5 mt-5">
        {bestSellingItems.map((product, id) => (
            <a href="#">
                <div key={id} className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col items-center justify-center item-hover">
                    {/* add image */}
                    <div className="h-52">
                        <img src={product.img} alt="product image" className="h-full w-full object-contain"/>
                    </div>
                    {/* image title */}
                    <h2 className="font-poppins text-base font-semibold mt-4 text-wrap px-2">
                        {product.title.length > 60 ? product.title.slice(0, 60) + '...' : product.title}
                    </h2>
                    <div className="w-full flex justify-start items-end mt-2 px-2">
                        <p className="font-poppins font-semibold text-4xl text-sky-900 mr-2">${product.price - (product.price * product.discount / 100)}</p>
                        <p className="font-poppins text-base line-through text-gray-500 mr-2">${product.price}</p>
                        <p className="font-poppins text-2xl font-bold text-green-600">-{product.discount}%</p>
                    </div>
                </div>
            </a>
        ))}
      </div>

    </div>
  )
}

export default BestSeller