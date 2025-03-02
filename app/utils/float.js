import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
  href="https://wa.me/919001907090"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
>
  <FaWhatsapp size={24} />
</a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/vpnwan"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-all"
      >
        <FaInstagram size={24} />
      </a>


      <a
  href="https://github.com/vpnwan"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all"
>
  <FaGithub size={24} />
</a>

    </div>
  );
}
