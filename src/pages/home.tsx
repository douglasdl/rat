import { useEffect, useState } from 'react'
import ratWheel from '../assets/rat-wheel.png'
import { supabase } from '../libs/supabaseClient'
import Auth from '../Auth'
import Account from '../Account'



export function Home() {
  const [barbershops, setBarbershops] = useState([]);

  async function getBarbershops() {
    const { data } = await supabase.from("Barbershop").select();
    setBarbershops(data);
  }

  useEffect(() => {
    getBarbershops();
  }, []);


  return (
    <div className="flex-col bg-green-900 flex flex-1 gap-4 h-screen w-screen items-start justify-center p-4 text-white">
      <header className='flex gap-8 mx-auto'>
        <div className=''>
          <h1 className="text-3xl font-bold">Rat Gamma</h1>
          <h2>Saia da Corrida dos Ratos</h2>
        </div>
        <img src={ratWheel} alt="Rat Wheek" className='w-16 h-16 rounded-lg' />
      </header>
      <main className='flex flex-1 px-4'>
        <ul>
          {barbershops.map((barbershop) => (
            <li key={barbershop.name}>{barbershop.name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}