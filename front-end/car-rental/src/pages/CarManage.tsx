import WithNavbar from "../hoc/WithNavbar";
import WithSidebar from "../hoc/WithSidebar";
import HomeManageCar   from "./HomeManageCar";

const CarManage= WithNavbar(WithSidebar(HomeManageCar));    
export default CarManage;