import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#4725EC] text-white py-16">
      <div className='flex justify-center items-center mb-16'>
        <img src="/logmarca.png" alt="" />
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged. It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li><a href="/casino" className="text-sm hover:text-yellow-400">Casino</a></li>
              <li><a href="/futebol" className="text-sm hover:text-yellow-400">Futebol</a></li>
              <li><a href="/apostas" className="text-sm hover:text-yellow-400">Apostas</a></li>
              <li><a href="/modalidades" className="text-sm hover:text-yellow-400">Modalidades</a></li>
              <li><a href="/tutorial" className="text-sm hover:text-yellow-400">Tutorial</a></li>
              <li><a href="/destaques" className="text-sm hover:text-yellow-400">Destaques</a></li>
            </ul>
          </div>

          {/* Follow & Search Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>

            
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#6B42F5] text-center text-sm">
          <div className="flex items-center justify-center space-x-2">
            <p>© 2024, Moosh.Com, All The Rights Reserved.</p>
            <div className="flex items-center space-x-1">
              <img src="/us.svg" alt="English" className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;