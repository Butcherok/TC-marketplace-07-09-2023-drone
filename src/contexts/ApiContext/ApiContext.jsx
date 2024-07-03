import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [query, setQuery] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await axios.get(
      //   'https://dr-one-marketplace.onrender.com/notices'
      // );
      // setQuery(response.data.data.notices);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const toggleFavorite = async (_id) => {
  //   const noticeToUpdate = query.find((notice) => notice._id === _id);

  // if (!noticeToUpdate) {
  //   console.error(`Notice with id ${_id} not found`);
  //   return;
  // }

  // // Update the local state with the updated favorite status
  // const updatedQuery = query.map((notice) =>
  //   notice._id === _id ? { ...notice, favorite: !notice.favorite } : notice
  // );

  // setQuery(updatedQuery);

  // // Update the server with the new data
  // try {
  //   const response = await axios.put(`https://dr-one-marketplace.onrender.com/notices/${_id}`, {
  //     favorite: !noticeToUpdate.favorite,
  //   });
  //   console.log('Server response:', response.data);
  // } catch (error) {
  //   console.error('Error updating favorite:', error);
  // }
  // };

  return (
    <ApiContext.Provider value={{ query, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
