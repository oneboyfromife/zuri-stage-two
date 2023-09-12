import {useState, createContext} from "react";

export const DataContext = createContext(null);

const ContextProvider = ({children}) => {
  const [data, setData] = useState({
    name: "Owojori Akintunde",
    slackHandle: "oneboyfromife",
    githubHandle: "https://github.com/oneboyfromife",
    phone: "+234 808 851 3703",
    email: "owojoriakintunde@gmail.com",
    track: "Mobile Track",
    address: "34, Owe Akala Area, Owode Ede",
    bio: "I am a Mechatronics engineering student, passionate about robotics and iOT where I got interested so much in mobile app development",
  });

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
