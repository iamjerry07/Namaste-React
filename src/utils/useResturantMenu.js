import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (id) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(MENU_API + id);
    let json = await data.json();
    console.log(json)
    setResMenu(json.data);
  };
  

  return resMenu;
};

export default useResturantMenu;
