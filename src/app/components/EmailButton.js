'use client';

import Image from 'next/image';

import emailIcon from 'pub/socials/email.svg'

function CopyToClipboardButton({ textToCopy, children }) {
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Email copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };
  
    return (
      <button onClick={handleCopy}>{children}</button>
    );
}


export default function EmailButton({ emailAddress, imageStyle }) {
    return (
        <CopyToClipboardButton textToCopy={emailAddress}>
            <Image 
                src={emailIcon}
                quality={75}
                className={imageStyle}
                alt="Email"
            />
        </CopyToClipboardButton>
    )
}