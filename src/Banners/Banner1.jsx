import React,{useEffect,useState} from 'react'

const Banner1 = () => {
    const images = ["https://drive.google.com/uc?export=view&id=1O866pXt7WTYBvZh8wGFMUXUG0HRWg-OM","https://drive.google.com/uc?export=view&id=1d4Z-ao7AK_XCuO2oi97k43yW0aaTydp0","https://drive.google.com/uc?export=view&id=1dkXGg8wd5nreQWHeymTO5P3zGMgZV_z_"];
    const [CurrentImage,setCurrentImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[(Math.floor(Math.random() * images.length)% images.length)]);
    }, 2500)
  return () => clearInterval(intervalId);
}, [])
  return (
  <>
   <div className='carousel'>
   <span>          
   </span>
    <img src={`${CurrentImage}`} alt="go away" />
   </div>
  </>
  )
}

export default Banner1