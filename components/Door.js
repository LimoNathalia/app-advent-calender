import React from 'react';
import { PrismicNextImage } from '@prismicio/next';

const Door = ({ doorData, handleClick }) => {
  return (
    <>
      <div
        className="group [perspective:1000px]"
        key={doorData.door_number}
        onClick={() => handleClick(doorData.door_number)}
      >
        <article className={doorData.open ? 'front open' : 'front'}>
          <div className="absolute inset-0 -z-10 ">
            <PrismicNextImage field={doorData.door_img} className=" h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          <div className={`rounded-full ${doorData.open ? 'bg-transparent' : 'bg-red'}`}>
            <h3 className={`m-10 text-3xl font-semibold leading-6 ${doorData.open ? 'text-transparent' : 'text-white'}`}>
              {doorData.door_number}
            </h3>
          </div>
          <div className={doorData.open ? 'b-open' : 'back'}>
            <h3 className="m-10 text-base font-semibold leading-6 text-white">{doorData.door_text}</h3>
          </div>
        </article>
      </div>
    </>
  );
};

export default Door;
