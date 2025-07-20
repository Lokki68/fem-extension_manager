import { createContext, useState } from "react";
import initialExtension from "../../data.json";

const ExtensionsContext = createContext();

function ExtensionsProvider({ children }) {
  const [extensionsData, setExtensionsData] = useState(initialExtension);

  function activeData(id) {
    let updatedData = extensionsData.filter((extension) => extension.id === id);

    updatedData = { ...updatedData, isActivate: true };

    setExtensionsData((prevExtension) => [...prevExtension, updatedData]);
  }

  function inactiveData(id) {
    let updatedData = extensionsData.filter((extension) => extension.id === id);

    updatedData = { ...updatedData, isActivate: false };

    setExtensionsData((prevExtension) => [...prevExtension, updatedData]);
  }

  function findExtension(id) {
    const resultExtension = extensionsData.filter(
      (extension) => extension.id === id
    );

    if (!resultExtension) {
      throw new Error("Extension not found");
    }

    return resultExtension;
  }

  return (
    <ExtensionsContext.Provider
      value={{
        extensionsData,
        findExtension,
        activeData,
        inactiveData,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
}

export { ExtensionsContext, ExtensionsProvider };
