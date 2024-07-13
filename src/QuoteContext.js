import { createContext, useState, useEffect } from "react";

const QuoteContext = createContext({
  quote: [],
});

export const QuoteContextProvider = ({ children }) => {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const quotes = data.quotes;
      setQuote(quotes);
      console.log(quotes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <QuoteContext.Provider value={{ quote, setQuote }}>
        {children}
      </QuoteContext.Provider>
    </div>
  );
};

export default QuoteContext;
