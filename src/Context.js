import React, { useState, createContext } from "react";

export const Context = createContext();

//context provider

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("")
  const [searchCards, setSearchCards] = useState(false)
  const [category, setCategory] = useState("general")
  const [loading, setLoading] = useState(true)

  // handleFetch function for fetching url
  const handleFetch = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (data.length !== 0 && !data.errors) {
      setLoading(true)
      setData(data.articles);
      setLoading(false)
    } else {
      setData([]);
    }
  };

  //function for submiting input form
  const handleSubmit = (ans) => {
    setLoading(true)
    setQuery(ans)
    setSearchCards(true)
    setLoading(false)
    
  }

  //function for handling categories of news
  const handleCategory = (ans) => {
    setLoading(true)
    setCategory(ans)
    setSearchCards(false)
    setLoading(false)
  }

  //context provider component
  return (
    <Context.Provider value={{ data, handleFetch, query, handleSubmit, searchCards, handleCategory, category, loading }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
