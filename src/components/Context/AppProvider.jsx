import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpenCandleCareModal, setIsOpenCandleCareModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [isResetForm, setIsResetForm] = useState(false);
  const [pagename, setPageName] = useState("");
  const [exclusive, setExclusive] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("prologue")) {
      setPageName("prologue");
    } else if (pathname.includes("case-study")) {
      setPageName("case-study");
    } else if (pathname.includes("exclusive-series")) {
      setPageName("exclusive-series");
    } else if (pathname.includes("inquiry")) {
      setPageName("inquiry");
    } else {
      setPageName("home");
    }
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        isOpenCandleCareModal,
        setIsOpenCandleCareModal,
        pagename,
        exclusive,
        setExclusive,
        isOpenSubmitModal,
        setIsOpenSubmitModal,
        isResetForm,
        setIsResetForm,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
