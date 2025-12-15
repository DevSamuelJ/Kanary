export const MenuHeader = () => (
    <header className="flex p-4 mb-2.5 w-full"> 
        <form className="w-full mr-5 flex items-center" action="">
            <input className="w-full rounded-2xl h-8.75 pl-3.75 bg-white" type="search" name="search" placeholder="🔎" />
        </form>
        <div className="w-35.7 flex justify-evenly items-center text-6">
            <a href="">🔔</a>
            <a href="">❔</a>
            <a href="">⚪</a>
        </div>
    </header>
)
