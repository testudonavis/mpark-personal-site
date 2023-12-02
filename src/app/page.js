import Image from 'next/image'
import Link from 'next/link';
import babyPic from 'pub/babypic.jpg';
import MainLink from '@/components/MainLink';
import Footer from './components/Footer';


export default function Home() {

  const mainLinks = [
    {
      route: 'projects',
    },
    {
      route: 'about',
    },
    {
      route: 'blog',
    },
    {
      route: 'cv',
    },
  ]

  return (
    <main className="flex min-h-screen items-center flex-col pt-10 pr-10 pl-10">
        <div className="content grow justify-center items-center">
          <div className="md:shrink-0">
            <Image 
            src={babyPic}
            quality={100}
            className= "w-full object-cover md:h-full"
            alt="baby mike"
            priority={true}
            />
          </div>

          <div 
          className="text-prim-text-2 text-center text-2xl pt-7 pb-3"
          >
            <Link href={`/about`}> mike park </Link>
          </div>
          {
            mainLinks.map(item => {
              return (
                <MainLink
                  key={item.route}
                  route={item.route}
                />
              );
            })
          }
        </div>
      <Footer />
    </main>
  )
}
