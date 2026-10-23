'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Img from './Img';
import styles from './Gallery.module.css';

// Thumbnail grid that opens a keyboard-accessible lightbox (native <dialog>).
// layout: "grid" (all thumbnails), "room" (one large + two small, rest in the lightbox),
// "strip" (horizontal row).
export default function Gallery({ images, label, layout = 'grid', sizes, visible }) {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(null);
  const shown = visible ? images.slice(0, visible) : images;

  const open = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((d) => setIndex((i) => (i + d + images.length) % images.length), [images.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setIndex(null);
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    dialog.addEventListener('close', onClose);
    dialog.addEventListener('keydown', onKey);
    return () => {
      dialog.removeEventListener('close', onClose);
      dialog.removeEventListener('keydown', onKey);
    };
  }, [step]);

  const current = index !== null ? images[index] : null;
  const defaultSizes = layout === 'room' ? '(min-width: 900px) 30vw, 50vw' : '(min-width: 900px) 25vw, 50vw';

  return (
    <div className={styles.gallery} data-layout={layout}>
      <ul className={styles.grid} aria-label={label}>
        {shown.map((img, i) => (
          <li key={img.key} className={styles.item}>
            <button type="button" className={styles.thumb} onClick={() => open(i)} aria-label={`View larger: ${img.alt}`}>
              <Img
                src={img.key}
                alt=""
                sizes={layout === 'room' && i === 0 ? '(min-width: 900px) 55vw, 100vw' : sizes ?? defaultSizes}
              />
            </button>
          </li>
        ))}
      </ul>
      {images.length > shown.length && (
        <button type="button" className={`text-link ${styles.more}`} onClick={() => open(0)}>
          View all {images.length} photos
        </button>
      )}

      <dialog ref={dialogRef} className={styles.dialog} aria-label={label}>
        {current && (
          <div className={styles.viewer}>
            <figure className={styles.figure}>
              <Img src={current.key} alt={current.alt} sizes="(min-width: 1200px) 1200px, 100vw" priority />
              <figcaption>
                {current.alt} <span className={styles.count}>({index + 1} of {images.length})</span>
              </figcaption>
            </figure>
            <div className={styles.controls}>
              <button type="button" onClick={() => step(-1)} className="btn btn-light">Previous</button>
              <button type="button" onClick={() => step(1)} className="btn btn-light">Next</button>
              <button type="button" onClick={close} className="btn btn-coral" autoFocus>Close</button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
