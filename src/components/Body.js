import RestaurantCard from "./RestaurantCard";
import resInfo from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resInfo);
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5165262&lng=73.84236609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json.data.cards[2].data.data.cards)
    }
    return (
        <>
            <div>
                <button onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => (res.info.avgRating > 4))
                    setListOfRestaurant(filteredList);

                    console.log('filteredList', filteredList)
                }}>
                    Top rated restaurants
                </button>
            </div>
            <div className="res-card-container">
                {listOfRestaurant.map((res) =>
                    <RestaurantCard resData={res} key={res.info.id} />
                )
                }
            </div>
        </>
    )
}
export default Body;