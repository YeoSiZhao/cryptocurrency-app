// eslint-disable-next-line no-unused-vars
import React, {useRef,useEffect} from 'react'
import './top.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
function BackToTop() {
  const mybuttonRef = useRef(null); // Create a ref to hold the button element

  useEffect(() => {
    const mybutton = mybuttonRef.current; // Get the actual element from the ref

    if (!mybutton) return; // Exit if the ref hasn't been assigned yet

    const scrollFunction = () => {
      if (document.documentElement.scrollTop > 30) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener('scroll', scrollFunction); // Correctly add the event listener

    // Cleanup function (to prevent memory leaks)
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);
  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className='back-to-top'
      ref={mybuttonRef} // Attach the ref to the div
      onClick={topFunction}
      style={{ display: 'none' }} // Set initial state to hidden
    >
      <ArrowUpwardRoundedIcon />
    </div>
  );
}

export default BackToTop;