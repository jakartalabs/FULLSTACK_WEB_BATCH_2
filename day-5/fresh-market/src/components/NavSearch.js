import React from 'react'

function NavSearch() {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">Logo</div>
      <div className="w-1/2 flex justify-center bg-gray-200">
        <div className="mt-1 relative rounded-md shadow-sm w-1/2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-100 bg-gray-500 py-2 rounded-l-full px-4">
              All Categories
            </span>
          </div>
          <input type="text" name="price" id="price" className="ml-36 py-2 outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 pl-6 pr-4 text-sm border border-gray-500 rounded rounded-r-full" placeholder="0.00"/>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/4">Icon</div>
    </div>
  )
}

export default NavSearch
