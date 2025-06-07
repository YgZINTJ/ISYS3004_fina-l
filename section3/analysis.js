// Network Efficiency: Instead of calling the API every time, 
// I cache the store data using the browser’s sessionStorage. 
// This reduces repeat fetches during a single session.
useEffect(() => {
  const cached = sessionStorage.getItem("storeData");

  if (cached) {
    const parsed = JSON.parse(cached);
    setStores(parsed);
    setFilteredStores(parsed);
    setLoading(false);
  } else {
    fetch('/api/stores')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setStores(data);
        setFilteredStores(data);
        sessionStorage.setItem("storeData", JSON.stringify(data)); // ✅ Caching here
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load store data.");
        setLoading(false);
      });
  }
}, []);
// Rendering Performance:I use React.memo() to memoize the Map child component so it only re-renders when the locations prop changes. 
// I also use useCallback for stable filter function references.
// These changes can improve loading efficiency and CPU usage for large datasets.

const Map = React.memo(({ locations }) => {
  return (
    <div role="region" aria-label="Store map">
      {locations.map((store) => (
        <div key={store.id} tabIndex="0">
          {store.name} – {store.distance}km away
        </div>
      ))}
    </div>
  );
});

// ✅ useCallback for filter function
const handleFilter = useCallback(() => {
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
}, [query, amenityFilter, stores]);

useEffect(() => {
  handleFilter();
}, [handleFilter]);
