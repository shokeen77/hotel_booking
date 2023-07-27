import React, { useEffect, useState } from "react"

function ApiData () {
    const [users, setUsers] = useState([])
    const App = () => {
        
      
        const ApiData = () => {
          fetch( "https://hotels-api-4ltr.onrender.com/api/hotels")
          
            .then(response => {
              return response.json()
            })
            .then(data => {
              setUsers(data)
            })
        }
        
        return (
          <div>
            
          </div>
        );
      }
    } 
      export default ApiData;

