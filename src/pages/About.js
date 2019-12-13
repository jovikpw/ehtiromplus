
import React from 'react'
import './About.css'
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import AboutServices from '../components/about_services';

export default function About() {
    return (
            <>
                {/* <Hero>   */}
                <Banner 
                    sahifa="О нас" 
                    h6="Микрокредитная организация “Эхтиром ПЛЮС” - первая Микрокредитная организация в Республике Узбекистан которая была создана в 2007 году.
                    Лицензия номер 001 на право осуществления деятельности была выдана 26.05.2007 года Центральным Банком Республики Узбекистан.
                    На протяжении всей деятельности организация предоставила финансовые услуги более чем 22 000 человек
                    "
                >
                </Banner>
                <AboutServices></AboutServices>
            {/* </Hero> */}
            </>
    );
}
