

import Blogcard from './Componnents/Blogcard';
import Cartone from './Componnents/Cartone';
import Carttwo from './Componnents/Carttwo';
import Categories from './Componnents/Categories';
import Leatest from './Componnents/Leatest';
import Shopex from './Componnents/Shopex';
import Treding from './Componnents/Treding';

export default function ProductCard() {
  return (
    <div className='container'>
        <Cartone/>
        <div className='mt-6'>
        <Carttwo/>
        </div>
        <div className='mt-6'>
        <Shopex/>
        </div>
        <div className='mt-6'>
       <Treding/>
        </div>
        <div className='mt-6'>
          <Blogcard/>
        </div>
        <div className='mt-6'>
          <Categories/>
        </div>
        <div className='mt-6'>
          <Leatest/>
        </div>
    </div>
   
  );
}
