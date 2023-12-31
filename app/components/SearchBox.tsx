"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

type Props = {}

const SearchBox = (props: Props) => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input) return;

    router.push(`/search?term=${input}`);
  }
  return (
    <div>
        <form  onSubmit={handleSearch} action="" className="max-w-6xl mx-auto flex justify-between
         items-center px-5">
            <input onChange={(e) => setInput(e.target.value)} placeholder='Search...' type="text" className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400" />
            <button disabled={!input} type='submit' className=" text-orange-400 disabled:text-gray-400">Search</button>
        </form>
    </div>
  )
}

export default SearchBox