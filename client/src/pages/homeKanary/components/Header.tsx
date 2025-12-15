export const Header = () => (
  <header>
    <nav className="flex justify-between items-center bg-slate-900/50 rounded-4xl px-6 py-3 text-white">
      <img src="./public/logoKanaryWhite.png" alt="logoKanary" />

      <div className="flex gap-6 items-center">
        <a className="hover:bg-gray-400/30 rounded-xl px-3 py-2" href="">
          Documentação
        </a>
        <a className="hover:bg-gray-400/30 rounded-xl px-3 py-2" href="">
          Sobre
        </a>
        <a className="hover:bg-gray-400/30 rounded-xl px-3 py-2" href="">Entrar</a>
        <a
          className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800"
          href=""
        >
          Criar Conta
        </a>
      </div>
    </nav>
  </header>
);
