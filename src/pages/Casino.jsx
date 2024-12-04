import { FaGamepad, FaTrophy, FaGift } from 'react-icons/fa'

const games = [
  {
    id: 1,
    title: "Gates of Olympus",
    image: "https://placehold.co/300x200",
    category: "Slots"
  },
  {
    id: 2,
    title: "Sweet Bonanza",
    image: "https://placehold.co/300x200",
    category: "Slots"
  },
  {
    id: 3,
    title: "Starlight Princess",
    image: "https://placehold.co/300x200",
    category: "Slots"
  }
]

function Casino() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16" data-aos="fade-up">
        <div className="bg-[#2a2a40] rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">3000+ Jogos de Casino</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 rounded-lg bg-[#1a1a2e]">
              <FaGamepad className="text-secondary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Slots</h3>
              <p className="text-gray-300">Mais de 2000 slots diferentes</p>
            </div>
            <div className="p-6 rounded-lg bg-[#1a1a2e]">
              <FaTrophy className="text-secondary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Jackpots</h3>
              <p className="text-gray-300">Grandes prêmios diários</p>
            </div>
            <div className="p-6 rounded-lg bg-[#1a1a2e]">
              <FaGift className="text-secondary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Bônus</h3>
              <p className="text-gray-300">Promoções exclusivas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-8">Jogos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-[#2a2a40] rounded-lg overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-300">{game.category}</p>
                <button className="mt-4 bg-secondary text-black px-6 py-2 rounded-full">
                  Jogar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" data-aos="fade-up">
        <div className="bg-[#2a2a40] rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Boas Vindas</h2>
          <p className="text-xl text-secondary mb-4">25 FREE SPINS</p>
          <p className="text-white mb-6">No Primeiro Depósito</p>
          <button className="bg-secondary text-black px-8 py-3 rounded-full font-bold">
            COMEÇAR
          </button>
        </div>
      </section>
    </div>
  )
}

export default Casino