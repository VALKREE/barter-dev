import React from 'react';
import classes from './AdCategory.module.css';

const AdCategory = ({ad}) => {
    return (
        <div className={classes.category}>
            <img src={'./images/ads/categories/'+ad.img} alt={ad.title} className={classes.image}/>
            <h3 className={classes.title}>{ad.title}</h3>
            <p className={classes.desc}>{ad.desc}</p>
            <div className={classes.badge}>
                <p>{ad.badge}</p>
            </div>
        </div>
    );
};

export default AdCategory;
