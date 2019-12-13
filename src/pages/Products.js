import React from 'react'
import Banner from '../components/Banner'
import Products_info from '../components/Products_info';
import Table from '../components/Table';

export default function About() {
    return (
            <>
                
                <Banner 
                    products="Продукты" 
                    h6="«Эхтиром ПЛЮС» предоставляет микрокредиты, микрозаймы и микролизинг только резидентам Республики Узбекистан. Микрокредиты предоставляются индивидуальным предпринимателям и другим субъектам малого бизнеса и микрозаймы физическим лицам для удовлетворения потребностей семейных нужд.
                    "
                >
                </Banner>
                <Products_info></Products_info>
                <Table></Table>
            </>
    );
}
