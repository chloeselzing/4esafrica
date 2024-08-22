'use client'
import { createContext, useState, useContext } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [currentContent, setCurrentContent] = useState('mainPage'); 

  const handleContentChange = (newContent) => {
    setCurrentContent(newContent);
  };

  return (
    <ContentContext.Provider value={{ currentContent, handleContentChange }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
