import React from "react";
import WithNavbar from "../hoc/WithNavbar";
import WithSidebar from "../hoc/WithSidebar";
import ManageBookingsHome from "./ManageBookingsHome";


const ManageBookings= WithNavbar(WithSidebar(ManageBookingsHome));
export default ManageBookings;