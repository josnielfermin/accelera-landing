import type { Metadata } from 'next';
import Landing from '@/components/Landing';

export const metadata: Metadata = {
  title: 'Accelera App',
  description: 'Finance App',
};
export default function HomePage() {
  return <Landing />;
}
