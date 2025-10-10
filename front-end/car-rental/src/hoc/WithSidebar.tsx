import React from 'react'
import Sidebar from '../components/Sidebar'
const WithSidebar = <p extends object> (WrappedComponent:React.ComponentType<p>)=>{
const ComponentWithSideBar:React.FC<p>=(props)=>(

<div className='flex'>
<Sidebar/>
<div className='flex-1 p-6'>
<WrappedComponent{...props}/>
</div>
</div>

)
return ComponentWithSideBar;
}
export default WithSidebar