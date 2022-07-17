import React from 'react'
import {GrFormAdd} from 'react-icons/gr';
import Link from 'next/link';

const TableTop = () => {
  return (
    <div className="flex items-center justify-between pb-4">
        <p className="">The terms you are Tracking</p>
        <div className="flex items-center justify-center space-x-5">
            <div className="flex space-x-1 justify-center">
                <div>
                <button type="button" className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                filter
                </button>
                </div>
            </div>

            <div className="flex space-x-2 justify-center">
            <Link href='/new'>
            <button type="button" className="inline-block px-6 pt-2.5 pb-2 bg-rose-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-rose-800 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-700 active:shadow-lg transition duration-150 ease-in-out flex align-center">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                className="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z">
                </path>
            </svg>
             Add
            </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default TableTop