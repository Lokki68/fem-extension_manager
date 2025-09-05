import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchExtensions } from "../../api/extension";
import Header from "./header/Header";
import List from "./list/List";

const ExtensionsList = () => {
  const {
    data: extensions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["extensions"],
    queryFn: fetchExtensions,
  });
  const [filteredExtensions, setFilteredExtensions] = useState(extensions);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredExtensions(extensions);
    } else if (filter === "active") {
      setFilteredExtensions(extensions.filter((ext) => ext.isActive));
    } else if (filter === "inactive") {
      setFilteredExtensions(extensions.filter((ext) => !ext.isActive));
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Header activeFilter={activeFilter} fnFilter={handleFilterChange} />

      <List data={filteredExtensions || extensions} />
    </div>
  );
};

export default ExtensionsList;
