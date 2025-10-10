import WithNavbar from "../hoc/WithNavbar";
import WithSidebar from "../hoc/WithSidebar";
import AddCarHome from "./HomeAddCar";

const AddCar= WithNavbar(WithSidebar(AddCarHome));
export default AddCar;