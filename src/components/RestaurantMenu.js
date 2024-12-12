import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_IMG, MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])
    const { resId } = useParams();
    console.log('resId', resId)
    // console.log('params', params)
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5165262&lng=73.84236609999999&restaurantId=" + resId)
        // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5165262&lng=73.84236609999999&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER"
        const json = await data.json();
        setResMenu(json.data)
        console.log('json', json)
    }

    if (resMenu === null) return <ShimmerUI />

    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = resMenu?.cards[2]?.card?.card?.info;
    const { offers } = resMenu?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
    const { itemCards } = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    console.log('offers', offers)
console.log('itemCards', itemCards)

    return (
        <>
            <h2>{name}</h2>
            <h4>{avgRating}  ( {totalRatingsString}  ) {costForTwoMessage}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <p><b>Outlet</b> {areaName}</p>
            <h4>{sla.slaString}</h4>
            <h2>Deals for you</h2>
            <ul>
                {
                    offers.map((item) => (
                        <li>{item.info.description} </li>
                    ))
                }
            </ul>
            <h2>Recommended</h2>
            <div>
                {itemCards.map((item) => (
                    <div >
                        <div className="restaurant-menu-recommended">{item.card.info.name}</div>
                        <div>  ₹{item.card.info.defaultPrice/100} </div>
                        <div>{item.card.info.ratings.aggregatedRating.rating}</div>
                        <img className="recommended-img" src={MENU_IMG+item.card.info.imageId}/>
                        {console.log('image-ID', item.card.info.imageId)}
                        3eb63332d8012c536aaa0f1b2c5fb1ba
                        <div className="res-menu-underline">{item.card.info.description}</div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default RestaurantMenu;