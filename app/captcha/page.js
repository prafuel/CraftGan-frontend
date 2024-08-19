'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Spinner from '@/components/Spinner';


const Page = () => {
  const [loading, setLoading] = useState(null);

  return (
    <main className="h-full flex flex-col items-center bg-gray-50 p-10 justify-evenly gap-3 overflow-y-scroll">
      <Link href={"/"} className="text-indigo-500 text-3xl font-bold py-5">Secure Captcha using Gan transformation</Link>

      {/* Shows spinner */}
      {(loading === 'loading') ? <Spinner color={'#3498db'} /> : ""}
      {(loading === 'error') ? <Spinner color={'red'} /> : ""}

    </main>
  )
}

export default Page