// Component Implementation with UX Considerations
// The key feature concludes REACT component fetches using /api/stores, displaying map using external map API, 
// and external API that fulfills fetching business hour, amenities and distance data.

import React, { useState, useEffect } from 'react'; // Week 11:  React Code Refinement

// Week 11: Example AI Dialog for Optimization 
const Map = ({ locations }) => (
  <div role="region" aria-label="Store map">
    {locations.map((store) => (
      <div key={store.id} tabIndex="0">
        {store.name} – {store.distance}km away
      </div>
    ))}
  </div>
);

const StoreLocator = () => {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [amenityFilter, setAmenityFilter] = useState("all");

  useEffect(() => {
    fetch('/api/stores') // 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setStores(data);
        setFilteredStores(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load store data.");
        setLoading(false);
      });
  }, []);

  const handleFilter = () => {
    let result = stores;

    if (query) {
      result = result.filter(store =>
        store.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (amenityFilter !== "all") {
      result = result.filter(store =>
        store.amenities.includes(amenityFilter)
      );
    }

    setFilteredStores(result);
  };

  useEffect(() => {
    handleFilter();
  }, [query, amenityFilter]);

  if (loading) return <p role="status">Loading store locations...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (filteredStores.length === 0) return <p>No stores match your criteria.</p>;

  return (
    <div aria-label="Store Locator Component">
      <h2 tabIndex="0">Find a Store</h2>

      <label htmlFor="search">Search by name:</label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search by store name"
      />

      <label htmlFor="amenity">Filter by amenity:</label>
      <select
        id="amenity"
        value={amenityFilter}
        onChange={(e) => setAmenityFilter(e.target.value)}
        aria-label="Filter by amenity"
      >
        <option value="all">All</option>
        <option value="wifi">Free Wi-Fi</option>
        <option value="parking">Parking</option>
        <option value="accessible">Wheelchair Access</option>
      </select>

      <Map locations={filteredStores} />
    </div>
  );
};

export default StoreLocator;


