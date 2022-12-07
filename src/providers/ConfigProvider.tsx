import * as React from 'react';

interface IConfigContext {
  closeSettingsModal: () => void;
  isSettingsModalOpen: boolean;
  openSettingsModal: () => void;
  p1Flipped: boolean;
  toggleP1Flipped: () => void;
}

const ConfigContext = React.createContext<IConfigContext>({
  closeSettingsModal: () => {},
  isSettingsModalOpen: false,
  openSettingsModal: () => {},
  p1Flipped: false,
  toggleP1Flipped: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const getInitialBooleanState = (property: string, defaultValue: boolean): boolean => {
  const data = localStorage.getItem(property);
  return data ? JSON.parse(data) : defaultValue;
};

export const ConfigProvider = ({ children }: IProps) => {
  const [p1Flipped, setP1Flipped] = React.useState(() => getInitialBooleanState('p1Flipped', false));
  const setP1FlippedState = React.useCallback((flipped: boolean) => {
    localStorage.setItem('p1Flipped', JSON.stringify(flipped));
    setP1Flipped(flipped);
  }, [setP1Flipped]);
  React.useEffect(() => { setP1FlippedState(p1Flipped); }, [p1Flipped, setP1FlippedState]);

  const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);

  const toggleP1Flipped = React.useCallback(() => {
    setP1FlippedState(!p1Flipped);
  }, [p1Flipped, setP1FlippedState]);

  const value = {
    closeSettingsModal: () => { setSettingsModalOpen(false) },
    isSettingsModalOpen: settingsModalOpen,
    openSettingsModal: () => { setSettingsModalOpen(true) },
    p1Flipped,
    toggleP1Flipped,
  };

  return (
    <ConfigContext.Provider value={ value }>
      { children }
    </ConfigContext.Provider>
  );
};

export const useConfigContext = () => React.useContext(ConfigContext);
