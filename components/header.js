import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {RiNotification2Fill} from 'react-icons/ri';

import Link from 'next/link'
import { useSession , signIn, signOut } from "next-auth/react"

const header = () => {
    
  return (
    <div className="">
        <div className="flex flex-row justify-evenly items-center py-4 px-4" >
            <div className="w-full relative drop-shadow-md">
                <AiOutlineSearch className="h-6 w-6 absolute top-2 left-1 ml-2 fill-slate-500" />
                <input type="text" className="w-10/12 h-10 px-14 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search"/>
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 ">
                <RiNotification2Fill className="h-6 w-6 fill-slate-500"/>
                <div className="h-10 w-10 bg-blue-500 aspect-square rounded-full relative">
                    <p className="text-xl font-semibold text-white absolute top-[13%]  left-[33%]">A</p>
                </div>
                <Link href="/api/auth/signIn">
                    <a onClick={e => {
                  e.preventDefault()
                  signIn()
                }} className="text-sm font-base text-gray-700 hover:cursor-pointer">singnUp</a>
                </Link>

                <Link href="/api/auth/signout">
                    <a onClick={e => {
                  e.preventDefault()
                  signOut()
                }} className="text-sm font-base text-gray-700 hover:cursor-pointer">singnOut</a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default header