// components/Offcanvas.js
import { useState } from 'react';
import styles from '../../styles/Offcanvas.module.css';

export default function Offcanvas({ id, title, children, activeId, setActiveId, position }) {
  const isOpen = id === activeId;

  const closeOffcanvas = () => {
    setActiveId(null);
  };

  // Determine the CSS class for the offcanvas position
  const positionClass = {
    left: styles.left,
    right: styles.right,
    top: styles.top,
    bottom: styles.bottom,
  }[position] || '';


//backup code
{/* <Offcanvas 
id="offcanvasTop" 
title="Offcanvas Top" 
activeId={activeId} 
setActiveId={setActiveId} 
position="top"
>
<OffcanvasContentTop closeOffcanvas={closeOffcanvas} /> 

//trfer coode

 onClick={() => setActiveId('offcanvasTop')}



*/}





  return (
    <>
      <div className={`${styles.offcanvas} ${positionClass} ${isOpen ? styles.show : ''}`}>
        <div className={styles.offcanvasHeader}>
          <h5 className={styles.offcanvasTitle}>{title}</h5>
          <button type="button" className={styles.closeButton} onClick={closeOffcanvas}>
            &times;
          </button>
        </div>
        <div className={styles.offcanvasBody}>
          {children}
        </div>
      </div>
      {isOpen && <div className={styles.backdrop} onClick={closeOffcanvas}></div>}
    </>
  );
}