import Countdown from '@/components/Countdown';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-16 items-center pt-16 sm:p-24 ubuntu.className'>
      <Countdown />
      <div className='text-9xl'>🏝️</div>
    </main>
  );
}
