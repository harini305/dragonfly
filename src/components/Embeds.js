'use client';

import { useState } from 'react';
import Img from './Img';
import { site } from '@/data/site';
import styles from './Embeds.module.css';

// Google Maps loads only when asked for (the embed URL is the one used on the source
// site; no API key, no invented coordinates). The outbound link always works.
export function MapEmbed({ title = 'Map showing Dragonfly Village in Ubud', fill = false }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${styles.map} ${fill ? styles.fill : ''}`}>
      {loaded ? (
        <iframe src={site.mapsEmbed} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div>
          <Img
            src="place/bali-2019-sdragonfly-drone-137"
            alt="Aerial view of Dragonfly Village between the rice fields"
            sizes="(min-width: 900px) 55vw, 100vw"
            className={styles.mapPhoto}
          />
          <div className={styles.mapPlaceholder}>
            <p>The interactive Google map loads when you choose to view it.</p>
            <div className="actions">
              <button type="button" className="btn btn-coral" onClick={() => setLoaded(true)}>Show map</button>
              <a className="btn btn-ghost" href={site.mapsLink} target="_blank" rel="noopener">
                Open in Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// "Dragonfly Village, Ubud, Bali" by Manu Film. The player loads only after a click.
export function VideoFacade({ poster, posterAlt }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={styles.video}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${site.youtubeId}?autoplay=1&rel=0`}
          title="Dragonfly Village, Ubud, Bali (video by Manu Film)"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.videoButton} onClick={() => setPlaying(true)}>
          <Img src={poster} alt={posterAlt} sizes="(min-width: 1240px) 1240px, 100vw" />
          <span className={styles.play}>
            <span className={styles.playIcon} aria-hidden="true" />
            Play the short video about us
          </span>
        </button>
      )}
    </div>
  );
}
