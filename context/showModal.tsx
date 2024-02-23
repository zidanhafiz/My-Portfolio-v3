'use client';
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface ModalContextType {
  isShow: boolean;
  isSuccess: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const value = {
    isShow,
    setIsShow,
    isSuccess,
    setIsSuccess,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
