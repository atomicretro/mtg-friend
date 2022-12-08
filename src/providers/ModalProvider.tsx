import * as React from 'react';

export enum ModalTypes {
  CHANCE = 'chance',
  LOOKUP = 'lookup',
  NONE = '',
  SETTINGS = 'settings',
}

interface IModalContext {
  closeModal: () => void;
  openModal: (modalType: ModalTypes) => void;
  whichModal: ModalTypes;
}

const ModalContext = React.createContext<IModalContext>({
  closeModal: () => {},
  openModal: () => {},
  whichModal: ModalTypes.NONE,
});

interface IProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: IProps) => {
  const [whichModal, setWhichModal] = React.useState(ModalTypes.NONE);

  const openModal = React.useCallback((modalType: ModalTypes) => {
    setWhichModal(modalType);
  }, [setWhichModal]);

  const closeModal = React.useCallback(() => {
    setWhichModal(ModalTypes.NONE);
  }, [setWhichModal]);

  const value = {
    closeModal,
    openModal,
    whichModal,
  };

  return (
    <ModalContext.Provider value={ value }>
      { children }
    </ModalContext.Provider>
  );
};

export const useModalContext = () => React.useContext(ModalContext);
