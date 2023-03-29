import { createClient } from '../../src/pages/api/prismicio';
import Layout from '../../components/Layout';
import Door from '../../components/Door';
import React, { useState, useEffect } from 'react';

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function Home({ pageData }) {
  const [doors, setDoors] = useState([]);
  useEffect(() => {
    setDoors(shuffle(pageData.data.slices.map((item) => item.items)));

    const calendar = localStorage.getItem('adventCalender-live');
    if (calendar === undefined) {
      return;
    }
    setDoors(JSON.parse(calendar));
  }, [pageData.data.slices]);

  useEffect(() => {
    pageData.data.slices.map(
      (item) =>
        item.items.length &&
        localStorage.setItem('adventCalender-live', JSON.stringify(pageData.data.slices.map((item) => item.items)))
    );
  }, [pageData.data.slices]);

  const handleFlipDoor = (door_number) => {
    const updatedDoors = pageData.data.slices.map((item) =>
      item.items.map((i) =>
        i.door_number === door_number ? { ...i, data: { ...i.door_number, open: !i.door_number.open } } : i
      )
    );
    setDoors(updatedDoors);
  };
  return (
    <Layout pageData={pageData}>
      <div className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{pageData.data.calender_title}</h2>
          <p className="mt-6 text-lg leading-8 text-white">{pageData.data.calender_description}</p>
          <div className="mx-auto mt-12 grid max-w-lg gap-4 lg:max-w-none lg:grid-cols-4">
            {doors ? (
              pageData.data.slices.map((item) =>
                item.items.map((i) => <Door key={i.door_number} doorData={i} handleClick={handleFlipDoor} />)
              )
            ) : (
              <div>No Content</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pageData = await client.getSingle('calender');

  return {
    props: {
      pageData,
    },
  };
}
