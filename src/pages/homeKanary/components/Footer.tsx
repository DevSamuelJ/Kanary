export const Footer = () => (
  <footer className="bg-slate-900/60 w-full h-52 text-white">
    <div className="px-10 py-8 flex gap-16">
      <div>
        <h2 className="font-bold text-xl mb-3">Informações</h2>
        <a href="#" className="block hover:text-slate-300">
          Documentação
        </a>
        <a href="#" className="block hover:text-slate-300">
          Acessar conta
        </a>
        <a href="#" className="block hover:text-slate-300">
          Criar nova conta{" "}
        </a>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-3">Ajuda</h2>
        <a href="#" className="block hover:text-slate-300">
          Termos e Políticas de privacidade
        </a>
        <a href="#" className="block hover:text-slate-300">
          Central de Ajuda
        </a>
        <a>Fale conosco</a>
      </div>
    </div>

    <p className="text-center mb-5 text-sm text-slate-400">Copyright © 2025</p>
  </footer>
);
