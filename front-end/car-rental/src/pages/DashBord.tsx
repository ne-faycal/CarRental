import React from 'react'
import WithNavbar from '../hoc/WithNavbar'
import WithSidebar from '../hoc/WithSidebar'
import DachBordHome from './DachBordHome';


const Dashboard= WithNavbar(WithSidebar(DachBordHome));
export default Dashboard;