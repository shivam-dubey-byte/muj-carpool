import { useState } from 'react';
import RideForm from '../components/RideForm';
import SearchBar from '../components/SearchBar';
import RideList from '../components/RideList';

const Home = () => {
  const [searchParams, setSearchParams] = useState({});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Find a Ride</h1>
      <RideForm />
      <SearchBar onSearch={setSearchParams} />
      <RideList searchParams={searchParams} />
    </div>
  );
};

export default Home;
