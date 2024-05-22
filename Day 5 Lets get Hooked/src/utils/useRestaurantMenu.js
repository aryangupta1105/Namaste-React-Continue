import { useEffect ,useState} from "react";

const useRestaurantMenu = (resId)=>{

    const [menuData , setMenuData] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);
    
    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
        setMenuData(json?.data);
    }

    return menuData;
}

export default useRestaurantMenu;