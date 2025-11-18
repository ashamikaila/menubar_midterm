'use client'

import CardTweetDemo from "./CardTweetDemo"

export default function HomePage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-white relative p-10"
      style={{ backgroundImage: "url('/matcha_bg.png')" }}
    >
      <CardTweetDemo />
    </main>
  )
}
