import Image from "next/image";
import { Button } from '@/components/ui/button'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <Button size={'lg'} variant={'destructive'}>Home Page</Button>
    </>
  );
}
