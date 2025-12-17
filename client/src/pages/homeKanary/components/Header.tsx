import { useNavigate } from "react-router"

export const Header = () => {
  const navigate = useNavigate();

  return(
    <header>
      <nav className="flex justify-between items-center bg-slate-900/50 rounded-4xl px-6 py-3 text-white">
        <img src="src/assets/img/logoKanaryWhiteSmall.png" alt="logoKanary" width={120} />

        <div className="flex gap-6 items-center">
          <a
            className="hover:bg-gray-400/30 rounded-xl px-3 py-2"
          >
            Documentação
          </a>
          <a 
            className="hover:bg-gray-400/30 rounded-xl px-3 py-2" href="">
            Sobre
          </a>
          <a
            onClick={() => navigate("./login")}
            className="hover:bg-gray-400/30 rounded-xl px-3 py-2 cursor-pointer">
              Entrar
          </a>
          <a
            onClick={() => navigate("./register")}
            className="bg-gray-950 rounded-lg px-4 py-2 border border-blue-500 hover:bg-gray-800"
          >
            Criar Conta
          </a>
        </div>
      </nav>
    </header>
  )
}
