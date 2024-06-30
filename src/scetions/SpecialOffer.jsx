import { offer } from "../assets/images"

import Button from "../Components/Button"

import {arrowRight} from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap 
    items-center max-xl:flex-col-reverse
    gap-10">

      <div className="flex-1">
        <img src={offer}
         alt="offer"
         width={773}
         height={687}
         className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col" >
          <h2 className=' font-palanquin text-4xl
         capitalize font-bold lg:max-w-lg'>

            <span
              className='text-coral-red '> Special </span>
            Offer
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

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop now' iconURL={arrowRight} />

            <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor ="border-slate-gray"
            textColor="text-slate-gray"
            
            />
            </div>
        </div>

    </section>
  )
}

export default SpecialOffer
