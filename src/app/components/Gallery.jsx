import Image from 'next/image';
import Link from 'next/link';

import websitePic from 'pub/website.png';
import scrapingPic from 'pub/scraping.jpg';

function Gallery() {
  const galleryImages = [
    {
      pic: websitePic,
      route: 'website',
    },
    {
      pic: scrapingPic,
      route: 'scraper',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap md:-m-2 justify-center md:justify-normal">
        {galleryImages.map(galleryImage => (
          <div key={galleryImage.route} className="w-4/5 md:w-1/4 p-0.5">
            <Link href={`/projects/${galleryImage.route}`} className="w-full h-full">
              <div className="relative text-center shadow-lg after:shadow-inner2 after:border-pf after:border-pic-frame after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 w-full h-full z-10">
                <Image
                  src={galleryImage.pic}
                  quality={75}
                  className="border-pf block object-cover object-center w-full h-full"
                  alt="baby mike"
                  priority
                  placeholder="blur"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
