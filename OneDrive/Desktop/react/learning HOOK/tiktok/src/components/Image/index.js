import { useState, forwardRef } from 'react';
import images from '~/assets/images';

console.log(images.defaultImage);
const Image = forwardRef(({ src, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(images.defaultImage);
   };

   return <img ref={ref} src={fallback || src} {...props} onError={handleError} />;
});

export default Image;
