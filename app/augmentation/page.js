'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Spinner from '@/components/Spinner';
import Image from 'next/image';

import fish from "../test_images/test5.jpeg"

import i11 from "../../public/augmented_images/1_1.jpeg"
import i12 from "../../public/augmented_images/1_2.jpeg"
import i13 from "../../public/augmented_images/1_3.jpeg"
import i14 from "../../public/augmented_images/1_4.jpeg"

import i21 from "../../public/augmented_images/2_1.jpeg"
import i22 from "../../public/augmented_images/2_2.jpeg"
import i23 from "../../public/augmented_images/2_3.jpeg"
import i24 from "../../public/augmented_images/2_4.jpeg"

import i31 from "../../public/augmented_images/3_1.jpeg"
import i32 from "../../public/augmented_images/3_2.jpeg"
import i33 from "../../public/augmented_images/3_3.jpeg"
import i34 from "../../public/augmented_images/3_4.jpeg"


const Page = () => {
  const [loading, setLoading] = useState(null);

  const augImg = [
    i11, i12, i13, i14,
    i21, i22, i23, i24,
    i31, i32, i33, i34,
  ]

  return (
    <main className="h-full flex flex-col items-center bg-gray-50 p-10 justify-evenly gap-3 overflow-y-scroll">
      <Link href={"/"} className="text-indigo-500 text-3xl font-bold py-5">Data Augmentation</Link>

      {/* Shows spinner */}
      {(loading === 'loading') ? <Spinner color={'#3498db'} /> : ""}
      {(loading === 'error') ? <Spinner color={'red'} /> : ""}

      <div className='w-48'>
        <img
          src={fish.src}
          className='h-fit shadow-xl border-2'
          alt="img"
        />
      </div>

      <h3>Augmented Images</h3>
      <section className='h-auto w-1/2 gap-4 p-10 flex flex-row flex-wrap'>
        {
          augImg.map((image, index) => {
            return <img 
              src={image.src}
              key={index}
              className='w-48 shadow-xl'
              alt='img'
            />
          })
        }
      </section>

    </main>
  )
}

export default Page