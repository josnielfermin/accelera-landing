import type { Metadata } from 'next';
import SeasonZero from '@/components/SeasonZero';

export const metadata: Metadata = {
  title: 'Accelera App',
  description: 'Finance App',
};
export default function SeasonZeroPage() {
  return <SeasonZero />;
}
