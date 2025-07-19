import { useContext, useState } from "react";
import { ExtensionsContext } from "../../context/ExtensionsProvider";
import Header from "./header/Header";
import List from "./list/List";

const ExtensionsList = () => {
  const { extensionsData } = useContext(ExtensionsContext);
  const [extensionsFilteredData, setExtensionFilteredData] =
    useState(extensionsData);
  const [activeFilter, setActiveFilter] = useState("all");

  function viewAllData() {
    setActiveFilter("all");
    setExtensionFilteredData(extensionsData);
  }

  function viewActiveData() {
    setActiveFilter("active");
    setExtensionFilteredData(
      extensionsData.filter((extension) => extension.isActive === true)
    );
  }

  function viewInactiveData() {
    setActiveFilter("inactive");
    setExtensionFilteredData(
      extensionsData.filter((extension) => extension.isActive === false)
    );
  }
  return (
    <div>
      <Header
        activeFilter={activeFilter}
        allData={viewAllData}
        activeData={viewActiveData}
        inactiveData={viewInactiveData}
      />
      <List data={extensionsFilteredData} />
    </div>
  );
};

export default ExtensionsList;
