import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
// import counterpart from 'counterpart';
// import Translate from 'react-translate-component';

// counterpart.registerTranslations('en', {
//     title: 'Title'
// })
// counterpart.setLocale('en');

export default function Home() {
    return ( 
    <>
    {/* <Translate content="title" component="h1" /> */}
    <Hero>  
        <Banner 
            title="Ehtirom"
            subtitle="Быстро, удобно, выгодно и просто"
        >
            <Link to='/about' 
                  className="btn-primary"
            >
                  О Нас
            </Link>
        </Banner>
    </Hero>
    <Services />
    </>
    );
}
