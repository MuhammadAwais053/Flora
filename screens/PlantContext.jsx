import React, {createContext, useState} from 'react';

export const PlantContext = createContext();

export const PlantProvider = ({children}) => {
  const [plants, setPlants] = useState([]);
  const [careSchedules, setCareSchedules] = useState([]);

  const addPlant = plant => {
    setPlants(prev => [...prev, plant]);
  };

  const addCareSchedule = (plantIndex, schedule) => {
    setCareSchedules(prev => [...prev, {...schedule, plantIndex}]);
  };

  return (
    <PlantContext.Provider
      value={{plants, addPlant, careSchedules, addCareSchedule}}>
      {children}
    </PlantContext.Provider>
  );
};
