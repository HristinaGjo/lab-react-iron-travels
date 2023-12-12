import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import './TravelList.css'

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  return (
    <>
      <div className="plan-ctn">
        {plans.map((onePlan) => (
          <div key={onePlan.id} className="destination-box">
             <div className="left-container">
              <img src={onePlan.image} alt={onePlan.destination} />
            </div>
            <div className="right-container">
              <h4>{onePlan.destination}({onePlan.days} days)</h4>
              <p>{onePlan.description}</p>
              <p>Price:{onePlan.totalCost}$</p>
            </div>
           
            {/* Additional content for each plan goes here */}
          </div>
        ))}
      </div>
    </>
  );
  
}

export default TravelList;
