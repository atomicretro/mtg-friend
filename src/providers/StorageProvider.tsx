import * as React from 'react';

interface IStorageContext {}

const StorageContext = React.createContext<IStorageContext>({});

interface IProps {
  children: React.ReactNode;
}

export const StorageProvider = ({ children }: IProps) => {
  const value = {};

  return (
    <StorageContext.Provider value={ value }>
      { children }
    </StorageContext.Provider>
  );
};

export const useStorage = () => React.useContext(StorageContext);
