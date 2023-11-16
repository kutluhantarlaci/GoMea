import Close from "../../../public/assets/icon_close.svg";
import Coupon from "../../../public/assets/icon_coupon.svg";
import Favorite from "../../../public/assets/icon_favorites.svg";
import FoodOrder from "../../../public/assets/icon_food_order.svg";
import Home from "../../../public/assets/icon_home.svg";
import Location from "../../../public/assets/icon_location.svg";
import Heart from "../../../public/assets/icon_heart.svg";
import Notification from "../../../public/assets/icon_notification.svg";
import OrderHistory from "../../../public/assets/icon_order_history.svg";
import Search from "../../../public/assets/icon_search.svg";
import Settings from "../../../public/assets/icon_settings.svg";
import Bakery from "../../../public/assets/icon_bakery.svg";
import Burger from "../../../public/assets/icon_burger.svg";
import Beverage from "../../../public/assets/icon_beverage.svg";
import Chicken from "../../../public/assets/icon_chicken.svg";
import Pizza from "../../../public/assets/icon_pizza.svg";
import Seafood from "../../../public/assets/icon_seafood.svg";
import Star from "../../../public/assets/icon_star.svg";
import RightArrow from "../../../public/assets/icon_right_arrow.svg";

export default function Icon({ name, style }) {
  const color = "yellow";
  switch (name) {
    case "Close":
      return <Close style={style} />;
    case "Coupon":
      return <Coupon style={style} />;
    case "Favorite":
      return <Favorite style={style} />;
    case "FoodOrder":
      return <FoodOrder style={style} />;
    case "Home":
      return <Home style={style} />;
    case "Location":
      return <Location style={style} />;
    case "Heart":
      return <Heart style={style} />;
    case "Notification":
      return <Notification style={style} />;
    case "OrderHistory":
      return <OrderHistory style={style} />;
    case "Search":
      return <Search style={style} />;
    case "Settings":
      return <Settings style={style} />;
    case "Bakery":
      return <Bakery />;
    case "Burger":
      return <Burger />;
    case "Beverage":
      return <Beverage />;
    case "Chicken":
      return <Chicken />;
    case "Pizza":
      return <Pizza />;
    case "Seafood":
      return <Seafood />;
    case "Star":
      return <Star style={style} />;
    case "RightArrow":
      return <RightArrow style={style} />;
  }
}
