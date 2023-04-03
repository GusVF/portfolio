import React, { createContext, useMemo, useState } from 'react';

export const TranslateContext = createContext();

function TranslateProvider({children}) {
  const [translate, setTranslate] = useState(true);
  
  const handleClick = () => {
    setTranslate(prevTranslate => !prevTranslate);
  }

  const values = useMemo(() => ({
  translate,
  handleClick,
  }),[translate]);

  return (
    < TranslateContext.Provider value={values}>
      {children}
    </ TranslateContext.Provider>
  )
};

export default TranslateProvider;
