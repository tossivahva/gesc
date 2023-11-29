import CompanyPros from '@/app/_components/CompanyPros';
import Hero from '@/app/_components/Hero';
import Solutions from '@/app/_components/Solutions';
import Footer from '@/app/_components/Footer';

export default function Page() {
   return (
      <main>
         <Hero/>
         <CompanyPros/>
         <Solutions/>
         <Footer/>
      </main>

   );
}