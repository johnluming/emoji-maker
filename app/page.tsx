import React from 'react';
import EmojiMaker from './components/EmojiMaker';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">😊 Emoj maker</h1>
      <EmojiMaker />
    </main>
  );
}
