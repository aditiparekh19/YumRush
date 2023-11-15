export const getFinalAmount = (card) => {
  let charges =
    card?.card?.info?.price > 1000
      ? card?.card?.info?.price / 100
      : card?.card?.info?.price;
  let defaultPrice =
    card?.card?.info?.defaultPrice > 1000
      ? card?.card?.info?.defaultPrice / 100
      : card?.card?.info?.defaultPrice;
  let finalAmount = Math.ceil(
    charges && charges != NaN && charges > 0
      ? charges
      : defaultPrice && defaultPrice != NaN && defaultPrice > 0
      ? defaultPrice
      : null
  );
  return finalAmount;
};
