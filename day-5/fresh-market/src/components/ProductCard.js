import React from 'react'
import Button from "./Button";

function Card({data}) {
  // title, description, price, discountPrice, btnBuy='enable'
  return (
    <div className="w-card-width rounded-md border border-gray-300 p-4">
      {/* img */}
      <div className="w-full rounded-md h-44 bg-gray-100">

      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-xl">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div className="flex flex-col">
          <div className="font-bold">{data.price}</div>
          <div className="text-sm">{data.discountPrice}</div>
        </div>
        <div className="self-center">
          <Button
            btnType="primary"
            size="lg"
            onClick={() => alert('test')}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
