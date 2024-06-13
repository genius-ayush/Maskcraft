import ScrollCarousel from 'scroll-carousel';
// { <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.css" /> }

function Involve() {
  new ScrollCarousel(".my-carousel", {
    autoplay: true ,
    direction: 'ltr'
  });
  return (
    
    <div className='p-5'>
      <div className="font-mono text-3xl font-medium flex items-center justify-center p-8 mt-9">Tag Us on Your Daily Cruise #MaskCraft</div>
      {/* <div style={{ backgroundColor: 'black' }} className=" h-1/2 pl-3 pr-3 flex flex-wrap gap-3 p-3"> */}  
        <div className="bg-black my-carousel flex p-3 gap-2">
          <div>
          <img src="/store/involve/images (1).jpeg" alt=""  className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (2).jpeg" alt="" className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (3).jpeg" alt="" className='h-50' />
          </div>
          <div>
          <img src="/store/involve/images (4).jpeg" alt="" className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (5).jpeg" alt="" className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (6).jpeg" alt="" className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (7).jpeg" alt="" className='h-50'/>
          </div>
          <div>
          <img src="/store/involve/images (8).jpeg" alt="" className='h-50'/>
          </div>
          
      </div>
    </div>
  )
}

export default Involve