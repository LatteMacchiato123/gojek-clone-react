import { Navbar } from '@/components/navbar';
import * as React from 'react';
import { Hero } from '@/components/hero';
import { Kenalin } from '@/components/kenalinTitle';
import { KenalinCard } from '@/components/kenalinCard';
import { SkalaTitle } from '@/components/skalaTitle';
import { SkalaCard } from '@/components/skalaCard';




export default function Home () {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Kenalin />
      <KenalinCard />
      <SkalaTitle />
      <SkalaCard />
    </div>
  );
}
