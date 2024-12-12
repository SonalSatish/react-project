import RestaurantCard from "./RestaurantCard";
import resInfo from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [filteredListCopy, setFilteredListCopy] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5165262&lng=73.84236609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log('json?.data?.cards[2]?.data?.data?.cards', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        )
    }

    if (listOfRestaurant.length === 0) {
        return <ShimmerUI />
    }

    return (
        <>
            <div className="search-box">
                <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                {console.log('searchText', searchText)}
                
                <button onClick={() => {
                    const filteredRestaurant = listOfRestaurant.filter((res)=>{
                        console.log('filteredRestaurant', res.info.name)
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                    setFilteredListCopy(filteredRestaurant);
                }}>Search</button>
            </div>
            <div>
                <button onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => (res.info.avgRating > 4))
                    setFilteredListCopy(filteredList);

                    console.log('filteredList', filteredList)
                }}>
                    Top rated restaurants
                </button>
            </div>
            <div className="res-card-container">
                {filteredListCopy.map((res) =>
                    <RestaurantCard resData={res} key={res.info.id} />
                )
                }
            </div>
        </>
    )
}
export default Body;