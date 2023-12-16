import free from "./assets/plans/free.jpg"
import bronze from "./assets/plans/bronze.jpg"
import silver from "./assets/plans/silver.jpg"
import gold from "./assets/plans/gold.jpg"
import premium from "./assets/plans/premium.jpg"

interface IPlansImages {
  FREE: string;
  BRONZE: string;
  SILVER: string;
  GOLD: string;
  PREMIUM: string;
}

const PlansImages: IPlansImages = {
  FREE: free,
  BRONZE: bronze,
  SILVER: silver,
  GOLD: gold,
  PREMIUM: premium
}


enum ENDPOINTS{
  BASE_URL = "http://localhost:8080/",
  LOGIN = "http://localhost:8080/users/login",
  PLANS = "http://localhost:8080/plans"
}

export { PlansImages, ENDPOINTS }