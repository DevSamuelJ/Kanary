function Board() {


  return (
    <>
        <div className="w-screen h-screen flex">
                {/* Menu  */}
    <nav id="menu" className="bg-white h-screen w-[300px] flex-col shadow-2xl/30">
        <div id="menuTitle" className="h-[100px] w-[100%] flex justify-center items-center">
            <img src="src/img/logo.png" alt="logo" className="pl-2 h-10 w-12"/>
            <p className="text-2xl font-bold">Projeto X</p>
        </div>

        <div id="menuButtons" className="h-[calc(100%-220px)] w-[100%] mt-[20px] flex-col text-[#707070]">
            <div id="dashboard" className="h-[60px] w-[100%] pl-15 flex items-center cursor-pointer hover:bg-[#EDF5FE] hover:transition-discrete duration-300">
                <img src="src/img/dashboard.png" alt="dashboard" className="h-[35px] w-[35px]"/>
                <p className="pl-2 text-2xl font-normal">Dashboard</p>
            </div>
            <div id="board" className="h-[60px] w-[100%] pl-15 mt-[15px] mb-[15px] flex items-center cursor-pointer hover:bg-[#EDF5FE] hover:transition-discrete duration-300">
                <img src="src/img/board.png" alt="dashboard" className="h-[35px] w-[35px]"/>
                <p className="pl-2 text-2xl font-normal">Board</p>
            </div>
            <div id="config" className="h-[60px] w-[100%] pl-15 flex items-center cursor-pointer hover:bg-[#EDF5FE] hover:transition-discrete duration-300">
                <img src="src/img/config.png" alt="dashboard" className="h-[35px] w-[35px]"/>
                <p className="pl-2 text-2xl font-normal">Configurações</p>
            </div>            
        </div>

        <div id="menuLogout" className="h-[100px] w-[100%] flex">
            <div onClick={() => window.location.href='index.html'}  id="logout" className="w-[100%] h-[60px] flex items-center justify-center cursor-pointer hover:bg-[#EDF5FE] hover:transition-discrete duration-300">
                <img src="src/img/logout.png" alt="logout" className="h-[35px] w-[35px]"/>
                <p className="pl-2 text-2xl font-normal text-[#707070]">Sair</p>
                
            </div>
        </div>
    </nav>

     {/* Main Screen */}
    <main className="h-screen w-[calc(100%-300px)] flex-col">
        <div id="mainTopMenu" className="h-[60px] w-[100%] flex items-center">
            <input type="text" className="ml-[10px] pl-3 w-[calc(100%-190px)] h-[40px] rounded-2xl  bg-gray-50" placeholder="🔍Busca"/>
            <div className="w-[190px] ml-[10px] h-[100%] flex items-center justify-evenly">
                <img src="src/img/notific.png" alt="Notificações" className="w-[35px] h-[35px]"/>
                <img src="src/img/question.png" alt="Ajuda" className="w-[35px] h-[35px]"/>
                <img src="src/img/user.png" alt="Usuário" className="w-[35px] h-[35px]"/>
            </div>
        </div>
    </main>

        </div>
    </>
  )
}

export default Board
