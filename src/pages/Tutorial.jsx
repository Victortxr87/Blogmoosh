import { FaBook, FaGamepad, FaCreditCard, FaTrophy } from 'react-icons/fa'

const tutorials = [
  {
    id: 1,
    title: "Como Começar",
    icon: FaBook,
    image: "https://placehold.co/400x300",
    description: "Guia básico para iniciantes"
  },
  {
    id: 2,
    title: "Apostas ao Vivo",
    icon: FaGamepad,
    image: "https://placehold.co/400x300",
    description: "Como fazer apostas durante os jogos"
  },
  {
    id: 3,
    title: "Depósitos e Saques",
    icon: FaCreditCard,
    image: "https://placehold.co/400x300",
    description: "Guia de transações financeiras"
  },
  {
    id: 4,
    title: "Bônus e Promoções",
    icon: FaTrophy,
    image: "https://placehold.co/400x300",
    description: "Como aproveitar as ofertas"
  }
]

function Tutorial() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16" data-aos="fade-up">
        <div className="bg-[#2a2a40] rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Tutorial</h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Aqui encontrará tudo sobre apostas e casino
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-[#1a1a2e] rounded-lg overflow-hidden">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <tutorial.icon className="text-secondary text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-white">{tutorial.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  <button className="text-secondary hover:underline">
                    Ler mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {['Áudio', 'Apostas', 'Regras', 'Bônus'].map((category, index) => (
          <div key={index} className="bg-[#2a2a40] p-4 rounded-lg text-center" data-aos="fade-up">
            <button className="text-white hover:text-secondary">
              {category}
            </button>
          </div>
        ))}
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

export default Tutorial