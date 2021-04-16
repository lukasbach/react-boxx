import React, { useEffect, useState } from 'react';

export interface KeyboardModeContextType {
  keyboardMode: boolean;
}

export const KeyboardModeContext = React.createContext<KeyboardModeContextType>({ keyboardMode: false });

export const KeyboardModeProvider: React.FC = props => {
  const [keyboardMode, setKeyboardMode] = useState(false);

  useEffect(() => {
    const keydownListener = () => setKeyboardMode(true);
    const mousedownListener = () => setKeyboardMode(false);
    document.addEventListener('keydown', keydownListener);
    document.addEventListener('mousedown', mousedownListener);

    return () => {
      document.removeEventListener('keydown', keydownListener);
      document.removeEventListener('mousedown', mousedownListener);
    }
  }, []);

  return (
    <KeyboardModeContext.Provider value={{ keyboardMode }}>
      {props.children}
    </KeyboardModeContext.Provider>
  );
}