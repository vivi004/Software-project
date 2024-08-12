// const Home = () => {
//     return (


//         <div className='h-full w-full flex justify-center items-center flex-col'>
//             <div className='w-full h-full'>
               

//             </div>
//             <div className="relative flex h-[30rem] w-full items-center justify-center overflow-hidden bg-background p-20 ">
//                 Hello
//             </div>
//         </div>
//     )
// }

// export default Home

import { NavLink } from 'react-router-dom'



const Home = () => {
    const NavLinks = [
        {
          title: "Newarrival",
          path: "/newarrivals"
        },
        {
          title: "Western",
          path: "/western"
        },
        {
          title: "Ethnic",
          path: "/ethnic"
        },
        {
          title: "Accessories",
          path: "/accessories"
        },
        {
            title:"MensCollections",
            path:"menscollections"
        }
      ]
      
  return (
    
    <div>
     
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
    {/* <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg"> koshkii</div> */}
    <div className='w-1/4 h-full font-bold flex flex-row justify-end items-center gap-12'>
      {
        NavLinks.map((links, index) => (
          <li key={index} className='list-none'>
            <NavLink to={links.path}>
              {links.title}
            </NavLink>
            
          </li>
        ))
      }
  </div>
      
    </div>
    <div>
    <div class="relative overflow-hidden bg-white">
  <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div class="sm:max-w-lg">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div class="mt-10">
        
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" class="inline-block rounded-md border border-transparent  bg-gray-700 px-8 py-3 text-center font-medium text-white hover:bg-gray-600">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  <div>
      

      {/* Hero */}
      <div className="md:flex bg-gray-800 text-gray-200 md:items-center md:justify-between">
        <div className="md:w-1/3 p-4 text-center mx-auto">
          <h1 className="text-4xl text-gray-100 mb-3">Welcome to CustomMart!</h1>
          <p className="text-lg mb-2">Your satisfaction is our joy!</p>
          <a href="#" className="inline-block p-2 mt-3 border-2 border-gray-200 hover:bg-gray-600 hover:text-gray-100 rounded">
            Start Shopping Now
          </a>
        </div>
        <div className="md:w-2/3">
          <img
            src="https://www.rentanattire.com/uploaded_files/banner/9ca20cdd510938997318508915dbf8ec.jpg"
            className="w-full"
            alt="Hero"
          />
        </div>
      </div>

      {/* Featured */}
      <div className="p-10 bg-gray-700 text-gray-200 text-center">
        <div className="text-center mb-3 text-4xl text-gray-100"></div>
        <div className="md:flex mx-auto mx-3 mx-auto md:items-center md:text-center">
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Lehengas+455x400.JPG"
              alt="Smart Men's Collection"
            />
            <p className="text-lg"></p>
          </div>
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Gown+455x400.JPG"
              alt="Folded Men's Shirts"
            />
            <p className="text-lg"></p>
          </div>
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Anarkalis+455x400.jpg"
              alt="Sweatshirts and T-shirts"
            />
            <p className="text-lg"></p>
          </div>
        </div>
      </div>
      
      {/* Featured */}
      <div className="p-10 bg-gray-700 text-gray-200 text-center">
        <div className="text-center mb-3 text-4xl text-gray-100"></div>
        <div className="md:flex mx-auto mx-3 mx-auto md:items-center md:text-center">
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Sherwani.JPG+455x400.jpg"
              alt="sherwani"
            />
            <p className="text-lg"></p>
          </div>
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Indo+western+option+2+455x400.PNG"
              alt="Indo-west"
            />
            <p className="text-lg"></p>
          </div>
          <div className="max-w-sm mx-auto md:mr-4 md:w-1/3 my-5">
            <img
              className="w-full rounded mb-3"
              src="https://rentitbae.s3.ap-southeast-1.amazonaws.com/Tuxe+455x400.PNG+option+2.png"
              alt="tuxedo"
            />
            <p className="text-lg"></p>
          </div>
        </div>
      </div>

    </div>
    
  </div>
  
  
  )
}

export default Home