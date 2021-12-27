import React, { useState,useEffect } from "react";
import { useDispatch } from 'react-redux'
import { CreatReport } from './Redux/actions/Actions'
import {
  
  Link
} from "react-router-dom";

import { useAlert } from 'react-alert'
import "./styles.css";

const Form = () => {

  const alert = useAlert()
  const [formData, setFormData] = useState({
    "userID": "",
    "marketID": "",
    "marketName": "",
    "cmdtyID": "",
    "cmdtyName": "",
    "priceUnit": "",
    "convFctr": null,
    "minPrice": null,
    "maxPrice": null
  });
  const { userID, marketID, marketName, cmdtyID,cmdtyName,priceUnit,convFctr,minPrice ,maxPrice} = formData;

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  
    const dispatch = useDispatch()
    
    const SubmitData = (event) => {
    
    if (userID && marketID && marketName && cmdtyID && cmdtyName && priceUnit && convFctr && minPrice && maxPrice)
    {
      


      dispatch(CreatReport(formData))
    }
    else
    {
      alert.show('All Inputs Require!!')
    }
    
    event.preventDefault();
  
  }


  return (

    <div className="col-md-6" style={{ margin: 'auto' }}>
      
      <center  className="mt-4">
        
      <h3 style={{color:'#e83e8c'}} >


        Add Report
      </h3>
     
      </center>
      


    <form>
     
      <input
        value={userID}
        onChange={e => updateFormData(e)}
        placeholder="Enter UserId"
        type="text"
        name="userID"
        required
      />
      <input
        value={marketID}
        onChange={e => updateFormData(e)}
        placeholder="Enter marketID"
        type="text"
        name="marketID"
        required
      />
      <input
        value={marketName}
        onChange={e => updateFormData(e)}
        placeholder="Enter market Name"
        type="text"
        name="marketName"
        required
      />
      <input
        value={cmdtyID}
        onChange={e => updateFormData(e)}
        placeholder=" Enter cmdtyID"
        type="text"
        name="cmdtyID"
        required
        />
        
        <input
        value={cmdtyName}
        onChange={e => updateFormData(e)}
        placeholder=" Enter cmdty Name"
        type="text"
        name="cmdtyName"
        required
        />
        

        <input
        value={priceUnit}
        onChange={e => updateFormData(e)}
        placeholder=" Enter price Unit"
        type="text"
        name="priceUnit"
        required
        />
        

        <input
        value={convFctr}
        onChange={e => updateFormData(e)}
        placeholder=" Enter convert Factor"
        type="number"
        name="convFctr"
        required
        />
        

        <input
        value={minPrice}
        onChange={e => updateFormData(e)}
        placeholder=" Enter Minimum Price"
        type="number"
        name="minPrice"
        required
        />
        

        <input
        value={maxPrice}
        onChange={e => updateFormData(e)}
        placeholder=" Enter Max Price"
        type="number"
        name="maxPrice"
        required
        />
        

        <div className="d-flex justify-content-around">
          
          <button type="submit" onClick={SubmitData}>Submit</button>
          <Link type="submit" to='/reports'>Get Reports</Link>
      
      </div>

    </form>
    </div>
  );
};

export default Form;
