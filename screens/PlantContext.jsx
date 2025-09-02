import React, {createContext, useState} from 'react';

export const PlantContext = createContext();

export const PlantProvider = ({children}) => {
  const [plants, setPlants] = useState([]);

  const addPlant = plant => {
    setPlants(prev => [...prev, plant]);
  };

  return (
    <PlantContext.Provider value={{plants, addPlant}}>
      {children}
    </PlantContext.Provider>
  );
};
