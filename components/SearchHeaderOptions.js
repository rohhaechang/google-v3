import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    // select-none은 선택을 하지 못하게 하는 것, 모바일에서 쓸 데가 있다고 한다.
    <div className='flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b'>
      <SearchHeaderOption title="All" Icon={MagnifyingGlassIcon} selected={router.query.searchType === "" || !router.query.searchType}/>
      <SearchHeaderOption title="Images" Icon={PhotoIcon} selected={router.query.searchType === "image"} />
    </div>
  )
}