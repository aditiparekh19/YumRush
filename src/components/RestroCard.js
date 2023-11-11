import { IMGCDN } from "../utils/Constants";

export const RestroCard = (props) => {
  return (
    <div className="mx-2 p-4 shadow-2xl border hover:shadow-lg rounded-lg">
      <img className= "w-auto rounded-lg" src={IMGCDN + props?.resData?.cloudinaryImageId} />
      <h3 className="font-extrabold m-2">{props?.resData?.name}</h3>
      <div className="flex justify-between p-2 text-lg font-serif">
        <h4>{props?.resData?.areaName}</h4>
        <h4>{props?.resData?.avgRating + " " + "Rating"}</h4>
        <h4>{props?.resData?.costForTwo}</h4>
      </div>
      <span className="flex flex-wrap text-lg font-serif p-2">{props?.resData?.cuisines.slice(0, 4).join(",")}</span>
    </div>
  );
};

// Config Driven UI
// Data layer + UI Layer = FE Engineer

// Higher Order Component
// input - RestroCard => RestroCardPromoted

export const withOpenedLabel = (RestroCard) =>{
  return (props) =>{
    return(
      <div>
        <label className="bg-black text-white m-4 p-4 w-30 rounded-md absolute">Opened</label>
        <RestroCard {...props}/>
      </div>
    )
  }
}
