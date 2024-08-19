'use client';

import Spinner from '@/components/Spinner';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

import i1 from '../test_images/test1.png'
import i2 from '../test_images/test2.jpg'
import i3 from '../test_images/test3.png'
import i4 from '../test_images/test4.png'
import i5 from '../test_images/test5.jpeg'
import i6 from '../test_images/test6.jpg'

const Page = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(null);
  
  const test_images = [i1, i2, i3, i4, i5, i6];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    const data = { model_num: current, iterations: iteration };

    formData.append('data', JSON.stringify(data));

    console.log("Request send to server...")
    setLoading("loading");
    (anime == null) ? setAnime(preview) : null;

    try {
      const response = await fetch("https://prafuel-craftgan-ai.hf.space/upload", {
        method: 'POST',
        body: formData,
      });

      // Handle the response data as needed
      if (response.ok) {
        const blob = await response.blob();
        const blobURL = URL.createObjectURL(blob);
        console.log(blobURL);
        setAnime(blobURL); // Set the processed image URL to state
        setLoading(null);
      } else {
        console.error('Error:', response.statusText);
        setLoading('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading('error');
    }
  };

  const [current, setCurrent] = useState("1");
  const handleCurrentModel = (e) => {
    setCurrent(e.target.value);
  }

  const [iteration, setIteration] = useState(1);
  const handleIterations = (e) => {
    setIteration(e.target.value);
  }

  const model = [
    'AnimeGANv2_Shinkai',
    'AnimeGANv2_Paprika',
    'AnimeGANv2_Hayao',
    'AnimeGAN_Hayao'
  ]


  const handleTestImageClick = async (imageSrc, fileName) => {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });

    setSelectedFile(file);
    setPreview(imageSrc);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = anime;
    link.download = 'anime_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="h-full flex flex-col items-center bg-gray-50 p-10 justify-evenly gap-3 overflow-y-scroll">
      <Link href={"/"} className="text-indigo-500 text-3xl font-bold py-5">Pic2Cartoon</Link>

      {/* Shows spinner */}
      {(loading === 'loading') ? <Spinner color={'#3498db'} /> : ""}
      {(loading === 'error') ? <Spinner color={'red'} /> : ""}

      {/* test images */}
      <span>Test Images</span>
      <section className='w-1/2 h-auto flex justify-around p-2 flex-wrap shadow-lg rounded-md'>
        {
          test_images.map((value, index) => {
            return <div key={index} className='w-28 border hover:border-gray-400 shadow-lg'
              onClick={() => handleTestImageClick(value.src, `test${index + 1}.${value.src.split('.').pop()}`)}>
              <img src={value.src} />
            </div>
          })

        }
      </section>

      <div className='parameters flex w-full justify-evenly flex-wrap gap-3'>
        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex justify-around items-center flex-wrap">
          <h2 className="text-gray-800 text-2xl font-bold m-4">Select Model</h2>

          <select className='p-5 rounded-md'
            value={current}
            onChange={(e) => { handleCurrentModel(e) }}>
            {
              model.map((value, index) => {
                return <option key={index} className='' value={index + 1}>{value}</option>
              })
            }
          </select>

        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex justify-around items-center flex-wrap">
          <h2 className="text-gray-800 text-2xl font-bold m-4">Iterations</h2>

          <select className='p-5 rounded-md'
            value={iteration}
            onChange={(e) => { handleIterations(e) }}>
            {
              model.map((value, index) => {
                return <option key={index} className='' value={index + 1}>{index + 1}</option>
              })
            }
          </select>

        </section>
      </div>

      {/* input image */}
      <section className='flex h-full justify-evenly items-center w-full flex-wrap gap-3'>

        <section className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-gray-800 text-2xl font-bold mb-4">Upload an Image</h2>

          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-gray-700"
            />
          </div>

          {preview && (
            <div className="mb-4 bg-red-500">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded border-2 border-indigo-500 hover:border-transparent hover:opacity-40"
                onClick={() => {
                  setPreview(null);
                  setSelectedFile(null);
                }}
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="bg-indigo-500 text-white p-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 w-full">
            Submit
          </button>
        </section>

        {/* converted image */}
        <section className="anime bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-gray-800 text-2xl font-bold mb-4">Anime Figure</h2>
          <div className="pb-5">
            {(!anime) ? <span className=''>will be display when image submitted... </span> : <span className='pb-5'>&nbsp;</span>}
          </div>

          {(anime) && (
            <div className="mb-4 bg-red-500">
              <img
                src={anime}
                alt="Preview"
                className="w-full h-auto rounded border-2 border-indigo-500 hover:border-transparent hover:opacity-40"
                onClick={() => {
                  setAnime(null);
                }}
              />
            </div>
          )}

          <button
            onClick={handleDownload}
            className="bg-indigo-500 text-white p-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 w-full"
          >
            Download
          </button>
        </section>
      </section>
    </main>
  );
};

export default Page;
