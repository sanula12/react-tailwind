import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div>
      <section id="about-us" className="flex justify-between
     items-center max-lg:flex-col gap-10 w-full max-container">

        <div className="flex flex-1 flex-col" >
          <h2 className=' font-palanquin text-4xl
         capitalize font-bold lg:max-w-lg'>

            We Provide You

            <span
              className='text-coral-red '> Super </span>
            <span
              className='text-coral-red '>Quality</span>
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Experience Unrivaled Craftsmanship and Superior
            Performance with Nike's Elite Range. From cutting-edge
            technology to exquisite design, our premier selection sets
            the standard for excellence. Elevate your style and performance
            to new heights with our meticulously crafted products, exclusively
            available on the Nike website. Shop now and redefine greatness.
          </p>

          <p className="mt-6 lg:max-w-lg info-text">Discover Top-tier Excellence: Elevate Your Style with Nike's Premium Collection!</p>

          <div className="mt-11">
            <Button label='View Details' />
            </div>
        </div>

        <div className="flex flex-1 justify-center items-center">

           <img src={shoe8} alt="shoe8"
           width={570}
           height={522}
           className="object-contain" /> 

        </div>

      </section>
    </div>
  )
}

export default SuperQuality
