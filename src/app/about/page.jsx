import Image from 'next/image';

import profilePic from 'pub/mike-venice.png';

export default function About() {
  return (
    <section className="flex mx-auto">
      <div className="bio flex flex-col justify-center w-80">
        <div className="flex justify-center">
          <Image src={profilePic} quality={100} className="w-48" alt="mike park" priority placeholder="blur" />
        </div>
        <p className="text-prim-text-2 text-xl">welcome</p>
        <br />
        <div className="main-text text-prim-text-2">
          <p>
            hey, i&apos;m mike! my primary background is software engineering, literature, and civics. i have over 7
            years experience in the tech industry as a jack of all trades for AI startups. it&apos;s the challenge of
            our times to use burgeoning technologies responsibly. my main interest is how we can provide inclusion,
            opportunity, and growth in our cities through tech. let&apos;s link up if you share this mission!
          </p>
          <br />
          <p>
            other things i like: driving my e39 m5, cooking a haul from the farmer&apos;s market, and going to concerts.
            i live in sunny venice, california with my partner dakota, our animals (turtle hula, cats rafa-tati), and
            our growing plant family.
          </p>
          <br />
          <p>
            it&apos;s important — now more than ever — to get involved in-person with our local communities. im
            volunteering through{' '}
            <a className="font-bold underline text-tertiary-text" href="https://www.kyccla.org/">
              KYCC
            </a>{' '}
            - for enrichment and as a tax advisor.
          </p>
          <br />
          <p>best way to reach me: contactmikepark@gmail.com #teaminboxzero</p>
          <br />
          <p>
            we can: <br />
            shoot some pool <br />
            grab a drink <br />
            go for a hike <br />
          </p>
          <br />
          <p>
            fav books: <br />
            neuromancer <br />
            sand county almanac <br />
            against the day <br />
          </p>
          <br />
          <p>
            fav movies: <br />
            chinatown <br />
            scarface <br />
            casablanca <br />
          </p>
          <br />
          <p>
            fav artists (♬): <br />
            james brown <br />
            led zeppelin <br />
            d&apos;angelo <br />
          </p>
        </div>
      </div>
    </section>
  );
}
