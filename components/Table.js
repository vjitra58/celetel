import React from 'react'
import {FiEdit2} from 'react-icons/fi';
import {AiOutlineDelete} from 'react-icons/ai';
import Link from 'next/link';

const table = ({notes}) => {
  return (
    <div className="">
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                UserName
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                E-mail
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Phone No.
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Company
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
            {notes.map((note)=>(
            <tr key={note._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{note.username}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {note.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {note.phoneNo}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {note.company}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-content">
                    <Link href= {`/${note._id}/edit`}><FiEdit2 className="hover:cursor-pointer stroke-cyan-600"/></Link>
                    <Link href= {`/${note._id}/delete`}><AiOutlineDelete className="ml-3 hover:cursor-pointer fill-rose-700"/></Link>
                </div>
              </td>
            </tr>
            ))}
            

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default table