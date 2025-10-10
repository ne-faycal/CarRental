import React from "react";
import Navbar from "../components/Navbar";

const WithNavbar = <p extends object>(
  WrappedComponent: React.ComponentType<p>
) => {
  const ComponentWithNavbar: React.FC<p> = (props) => (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
    </div>
  );
  return ComponentWithNavbar;
};
export default WithNavbar;
