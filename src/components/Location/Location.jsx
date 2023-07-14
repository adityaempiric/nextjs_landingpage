import React from 'react'
import styles from './Location.module.css';
import {GrLocation} from 'react-icons/gr';
import { Country, State, City } from "country-state-city";

const Location = ({country,locdis,setLocValue}) => {
const countryData = Country.getAllCountries();


  return (
    <div className={locdis ==="none"?styles.mainContainerNone:styles.mainContainer}>
        <div className={styles.locationHeader}>
            <GrLocation/>
            <p className={styles.locationTitle}>Popular Places</p>
        </div>
        <div className={styles.locationList}>
        {country.map((res)=>{
            
            return(
                <button className={styles.locFull} onClick={()=>setLocValue(res.name)}>     
                    <GrLocation/>  
                    <p className={styles.locationData}>{res.name}</p>
                </button>
            )
        })}
        </div>
    </div>
  )
}

export default Location