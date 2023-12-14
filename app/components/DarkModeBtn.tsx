"use client"

import { useEffect, useState } from "react"
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

type Props = {}

const DarkModeBtn = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  },[setMounted]);
  if(!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="">
      {currentTheme == 'dark' ? (
        <SunIcon className="h-8 w-8 cursor-pointer text-yellow-500" onClick={() => setTheme("light")} />
      ): (
        <MoonIcon className="h-8 w-8 cursor-pointer text-gray-900" onClick={() => setTheme("dark")} /> 
      )}
    </div>
  )
}

export default DarkModeBtn