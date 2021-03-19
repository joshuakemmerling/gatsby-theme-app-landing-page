import React, { useEffect } from 'react';
import {decode} from 'html-entities';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import useAppData from '../use-app-data';
import useOptions from '../use-options';

export default () => {
  const {
    appId,
    description,
    developer,
    developerWebsite,
    icon,
    privacyPolicyUrl,
    reviews,
    rating,
    supportUrl,
    name,
    url,
    ipadScreenshots,
    iphone55Screenshots,
    iphone65Screenshots,
    macScreenshots,
    editorialNotes: {
      short,
      standard,
      tagline,
    },
    subtitle,
  } = useAppData();
  const {
    typography,
    appearance,
  } = useOptions();
  const isWideImages = iphone65Screenshots.length === 0 && iphone55Screenshots.length === 0;
  const cleanDescription = description.replace(/\n/gim, '<br />');
  const fontFamilyClass = classnames({
    'font-serif': typography === 'serif',
    'font-slab': typography === 'slab',
    'font-mono': typography === 'mono',
  });
  const headerColorClass = classnames({
    'text-black dark:text-white': appearance === 'auto',
    'text-black': appearance === 'light',
    'text-white': appearance === 'dark',
  });
  let screenshots = [];

  if (iphone65Screenshots.length > 0) {
    screenshots = iphone65Screenshots;
  } else if (iphone55Screenshots.length > 0) {
    screenshots = iphone55Screenshots;
  } else if (ipadScreenshots.length > 0) {
    screenshots = ipadScreenshots;
  } else if (macScreenshots.length > 0) {
    screenshots = macScreenshots;
  }

  return <div className={classnames('min-h-screen', {
    'dark:bg-gray-900 text-gray-600 dark:text-gray-400': appearance === 'auto',
    'bg-gray-900 text-gray-400': appearance === 'dark',
    'text-gray-600': appearance === 'light',
  })}>
    <Helmet>
      <title>{name}</title>
      <meta name="image" content={icon} />
      <meta property="og:title" content={name} />
      <meta property="og:image" content={icon} />
      <meta itemprop="image" content={icon} />
      <meta name="apple-itunes-app" content={`app-id=${appId}`} />
      <link rel="icon" type="image/png" sizes="96x96" href={icon} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon} />
    </Helmet>
    <main className="max-w-screen-xl mx-auto px-4">
      <header className="text-center pt-16 sm:pt-24 md:pt-32">
        <img src={icon} className="w-16 mx-auto mb-16" alt={`${name} App Icon`} style={{borderRadius: '22.5%'}} />
        <h1 className={`${fontFamilyClass} text-3xl sm:text-4xl md:text-5xl font-black mb-4 ${headerColorClass}`}>{decode(name)}</h1>
        <p className="sm:text-lg md:text-xl mb-6 max-w-screen-md mx-auto">{decode(standard || short || tagline || subtitle)}</p>
        <p>
          <a href={url} target="_blank" rel="noreferrer" className="inline-block">
            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" className="w-40 inline-block" alt="Download on the App Store" />
          </a>
        </p>
        {reviews > 0 && <p className="text-sm flex items-center justify-center mt-2">
          {Array(Math.floor(rating)).fill('').map((_, i) => <i key={`full-star-${i}`} className="fas fa-star text-yellow-500 mx-0.5"></i>)}
          {Array(Math.round(rating % 1)).fill('').map((_, i) => <i key={`half-star-${i}`} className="fas fa-star-half-alt text-yellow-500 mx-0.5"></i>)}
          {Array(5 - Math.floor(rating) - Math.round(rating % 1)).fill('').map((_, i) => <i key={`empty-star-${i}`} className="far fa-star text-yellow-500 mx-0.5"></i>)}
          <span className="ml-1">{Math.round(rating * 10) / 10} &bull; {reviews.toLocaleString()} Reviews</span>
        </p>}
      </header>
      {!isWideImages && <section className="flex items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-32">
        <img src={screenshots[1]} className="w-64 rounded-2xl shadow-lg relative transform left-16 -rotate-12 scale-95" />
        <img src={screenshots[0]} className="w-64 rounded-2xl shadow-lg relative z-10" />
        <img src={screenshots[2]} className="w-64 rounded-2xl shadow-lg relative transform right-16 rotate-12 scale-95" />
      </section>}
      {isWideImages && <section className="relative overflow-hidden my-16 md:my-24 lg:mt-32">
        <img src={screenshots[0]} className="rounded-2xl -mb-16 sm:-mb-24 md:-mb-32 lg:-mb-64" />
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white h-12 sm:h-16 md:h-32 lg:h-48"></div>
      </section>}
      <section className={classnames(`max-w-screen-sm mx-auto mb-16 md:mb-24 lg:mb-32 sm:p-12 p-6 rounded-2xl`, {
        'bg-gray-50 dark:bg-gray-800': appearance === 'auto',
        'bg-gray-50': appearance === 'light',
        'bg-gray-800': appearance === 'dark',
      })} dangerouslySetInnerHTML={{__html: cleanDescription}}></section>
      <section className="text-center mb-16 md:mb-24 lg:mb-32">
        <h2 className={`${fontFamilyClass} text-2xl font-black mb-1 text-black ${headerColorClass}`}>Get {decode(name)}</h2>
        <h3 className="text-lg mb-3">{decode(subtitle)}</h3>
        <a href={url} target="_blank" rel="noreferrer" className="inline-block">
          <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" className="w-32 inline-block" alt="Download on the App Store" />
        </a>
      </section>
      <footer className="flex flex-wrap items-center justify-center px-4 mb-8 max-w-screen-xl mx-auto">
        {developerWebsite === '' && <span className="mx-3">{developer}</span>}
        {developerWebsite !== '' && <a href={developerWebsite} target="_blank" rel="noreferrer" className="whitespace-nowrap mx-3">
          {developer} <span className="transform rotate-45 inline-block opacity-50">&#8593;</span>
        </a>}
        {supportUrl !== '' && <a href={supportUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap mx-3">
          Support <span className="transform rotate-45 inline-block opacity-50">&#8593;</span>
        </a>}
        {privacyPolicyUrl !== '' && <a href={privacyPolicyUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap mx-3">
          Privacy Policy <span className="transform rotate-45 inline-block opacity-50">&#8593;</span>
        </a>}
      </footer>
    </main>
    
    {!isWideImages && screenshots.length - 3 >= 3 && <section className="flex items-start justify-center mt-12 h-60 relative overflow-hidden">
      {screenshots.slice(3).map(url => (
        <img key={url} src={url} className="w-48 rounded-2xl flex-shrink-0 shadow-lg mx-6" />
      ))}
    </section>}
    {isWideImages && <section className="flex items-start justify-center mt-12 h-32 md:48 lg:h-60 relative overflow-hidden">
      {screenshots.slice(1).map(url => (
        <img key={url} src={url} className="w-full max-w-xl rounded-lg flex-shrink-0 shadow-lg mx-6" />
      ))}
    </section>}
  </div>;
};