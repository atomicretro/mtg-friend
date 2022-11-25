import * as React from 'react';

interface IConfigContext {}

const ConfigContext = React.createContext<IConfigContext>({});

interface IProps {
  children: React.ReactNode;
}

export const ConfigProvider = ({ children }: IProps) => {
  const value = {};

  return (
    <ConfigContext.Provider value={ value }>
      { children }
    </ConfigContext.Provider>
  );
};

export const useConfig = () => React.useContext(ConfigContext);
