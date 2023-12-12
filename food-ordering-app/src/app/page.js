import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu';
import SectionHeaders from '../components/layout/SectionHeaders';



export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className='my-16 text-center'>
        <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'} />
          <div className='flex flex-col max-w-md gap-4 mx-auto mt-4 text-gray-500'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo
             optio porro laudantium dolor omnis molestias fugit quibusdam recusandae 
             molestiae tenetur consequatur repellat illum delectus, ut voluptatum eaque 
             magnam natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio atque 
            dolor provident voluptas eligendi saepe repellendus tempore
             repudiandae in ea, ratione aperiam, sunt ipsam repellat esse blanditiis natus ipsa tenetur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus animi
             perspiciatis vitae at veritatis!
          </p>
          </div>
          
      </section>

      <section className="my-8 text-center" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-500 underline" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
      
    </>
  )
}
