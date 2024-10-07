import Sliderslick from './Componnents/Sliderslick';
import Featured from './Componnents/Featured';
import Leatest from './Componnents/Leatest';
import getAlldata from '@/lib/getAlldata';
export default async function ProductCard() {
  const productdata = await getAlldata()
  
  return (
    <>
       <div className=''>
          <Sliderslick/>
      </div>
      <Featured/>
      <Leatest productdata={productdata}/>
    </>
  
    
   
  );
}
