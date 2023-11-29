import CompanyPros from '@/app/components/CompanyPros';
import Hero from '@/app/components/Hero';
import Solutions from '@/app/components/Solutions';
import Footer from '@/app/components/Footer';

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