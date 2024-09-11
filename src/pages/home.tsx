import ratWheel from '../assets/rat-wheel.png'

export function Home() {
  return (
    <div className="bg-green-900 flex flex-1 h-screen w-screen items-start justify-center p-4 text-white">
      <header className='flex gap-8'>
        <div>
          <h1 className="text-3xl font-bold">Rat Gamma</h1>
          <h2>Saia da Corrida dos Ratos</h2>
        </div>
        <img src={ratWheel} alt="Rat Wheek" className='w-16 h-16 rounded-lg' />

      </header>
    </div>
  )
}