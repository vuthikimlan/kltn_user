export const percentStarComment = (comment) => {
  const starCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const ratings = comment.forEach((review) => {
    starCount[review.rating]++;
  });
  console.log("rating", ratings);

  let totalStar = 0;
  Object.values(starCount).forEach((count) => {
    console.log("count", count);
    totalStar += count;
  });

  console.log("totalStar", totalStar);
  const result = {};
  Object.keys(starCount).forEach((star) => {
    result[star] = (starCount[star] / totalStar) * 100;
  });

  Object.entries(result).forEach(([key, value]) => {
    console.log(`${key}: ${value}%`);
  });
  console.log("result", result);
  return result;
};
