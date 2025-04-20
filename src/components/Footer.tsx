
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ЭлектроПро</h3>
            <p className="mb-4">
              Профессиональные электромонтажные работы любой сложности с гарантией качества.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-white transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Email: info@elektropro.ru</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} ЭлектроПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
