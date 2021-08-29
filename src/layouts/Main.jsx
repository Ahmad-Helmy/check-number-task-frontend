import React from 'react';
import styles from "../styles/main.module.css"

const Main = ({children}) => {
    return ( 
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div className="col-8 offset-2 mt-5 bg-white p-5 rounded shadow">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default Main;