import CompanyPros from '@/app/ui/home/CompanyPros';
import Hero from '@/app/ui/home/Hero';
import Solutions from '@/app/ui/home/Solutions';
import Footer from '@/app/ui/Footer';

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