import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import {getCurrentProfile} from "../../js/action/profileActions";
//import addProfile from "../addProfile"; 
 
const Dashboard = () => {
 
  const user = useSelector((state) => state.authReducer.user);
  const profile = useSelector((state) => state.profileReducer.profile);
 const dispatch = useDispatch();
  useEffect(() => {
  dispatch(getCurrentProfile(),[]);
 })
    
  
  let dashboardContent; 
  if (!user ) 
    return <h1>Spinner...</h1>
    else{
      // // User is login but has no profile
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
           <p>profile existe</p>
         </div> 
       );
        }
        else{
       // profile existe
       dashboardContent = (
        <div>
        <h1>
        
         {user.firstName} {user.lastName} : {user.email}
        </h1>
        <p>You have not yet setup a profile, please add some info</p>
              <Link to="/addProfile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
      </div>
      );
        

       }}
         
  return (
    <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
    </div>
 
  );
};


export default Dashboard;