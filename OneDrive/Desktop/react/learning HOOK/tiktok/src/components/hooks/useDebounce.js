import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
   const [useDebounce, setUseDebounce] = useState(value);

   useEffect(() => {
      const Debounce = setTimeout(() => setUseDebounce(value), delay);

      return () => clearTimeout(Debounce);
   }, [value]);

   return useDebounce;
}
export default useDebounce;
