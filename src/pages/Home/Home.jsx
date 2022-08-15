import React from 'react';
import classes from "./Home.module.css";
import Search from "../../components/Search/Search";
import AdsCategories from "../../components/AdsCategories/AdsCategories";
import AdsVips from "../../components/AdsVips/AdsVips";
import AdsRecommendations from "../../components/AdsRecommendations/AdsRecommendations";

const Home = () => {
    const adsCategories = [
        {
            id: 1,
            img: 'img1.svg',
            title: 'Недвижимость',
            desc: 'Квартиры, дома и многое другое',
            badge: '220 000+ ОБЪЯВЛЕНИЙ'
        },
        {
            id: 2,
            img: 'img2.svg',
            title: 'Недвижимость',
            desc: 'Квартиры, дома и многое другое',
            badge: '220 000+ ОБЪЯВЛЕНИЙ'
        },
        {
            id: 3,
            img: 'img3.svg',
            title: 'Недвижимость',
            desc: 'Квартиры, дома и многое другое',
            badge: '220 000+ ОБЪЯВЛЕНИЙ'
        },
        {
            id: 4,
            img: 'img4.svg',
            title: 'Недвижимость',
            desc: 'Квартиры, дома и многое другое',
            badge: '220 000+ ОБЪЯВЛЕНИЙ'
        },
    ];
    const adsVips = [
        {
            ad_id: 1,
            ad_image: 'ad1.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: null,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 2,
            ad_image: 'ad2.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: null,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 3,
            ad_image: 'ad3.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 4,
            ad_image: 'ad4.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
    ];
    const adsRecommendations = [
        {
            ad_id: 1,
            ad_image: 'ad1.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 2,
            ad_image: 'ad2.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 3,
            ad_image: 'ad3.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 4,
            ad_image: 'ad4.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 5,
            ad_image: 'ad5.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 6,
            ad_image: 'ad6.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 7,
            ad_image: 'ad7.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
        {
            ad_id: 8,
            ad_image: 'ad8.png',
            ad_title: 'Apple Macbook Pro 16” 512GB 10 core',
            ad_region: 'Россия, Москва',
            ad_date: 'Сегодня, 21:54',
            ad_price: 2999,
            profile_id: 1,
            profile_image: 'avatar.png',
            profile_name: 'Ali M.',
            profile_rank: 4.9,
            profile_rewiews: 84,
        },
    ];
    return (
        <div className={classes.home}>
            <Search />
            <AdsCategories heading='Категории' ads={adsCategories}/>
            <AdsVips heading='VIP Объявления' ads={adsVips}/>
            <AdsRecommendations heading='Рекомендуем вам' ads={adsRecommendations}/>
        </div>
    );
};

export default Home;
