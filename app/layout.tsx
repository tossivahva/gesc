import './globals.css';
import type {Metadata} from 'next';
import Navbar from '@/app/components/Navbar';
import React from 'react';
import {rubik} from '@/app/fonts';

export const metadata: Metadata = {
   title: 'GES Computers',
   description: 'Generated by create next app'
};

export default function RootLayout({
   children
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="ru">
      <body className={`${rubik.className} antialiased`}>
      <Navbar/>
      {children}
      </body>
      </html>
   );
}
