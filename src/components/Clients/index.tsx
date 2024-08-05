"use client"
import { useEffect, useState } from 'react';
import SingleClient from "./SingleClient";

const Clients = () => {
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    // Fetch data from homepage.json
    fetch('/data/homepage.json')
      .then((response) => response.json())
      .then((data) => setClientsData(data.clients))
      .catch((error) => console.error('Error fetching clients data:', error));
  }, []);

  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client) => (
            <SingleClient key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
