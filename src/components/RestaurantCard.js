// *props
// steps for writing the props
// 1) const ResObj =(props)=>{
//     return(
//         <h1>{props.resData}</h1>
//     )
// }
//Using object destructuring
// 2) const ResObj = (props)=>{
// const {resData}= props
// return(
// <h1>{resData}<h1/>
// )
// }
//3) const ResObj = ({resData})=>{
// <h1>{resData}<h1/>
// }
// <RestuarantCard resData={resInfo}/>

import { CARD_IMG } from "../utils/constants";
export const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } = resData?.info
    return (    
            <div className="res-card">
                <img src={ CARD_IMG + cloudinaryImageId} className="res-logo" />
                <h3>{name}</h3>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{cuisines.join(", ")}</h4>
                {/* <h4>{resData.Data.info.timing}</h4>

            <h4>{resData.Data.info.locality}</h4>
            <h4>{resData.Data.info.cuisine}</h4> */}

            </div>
    )
}
export default RestaurantCard;