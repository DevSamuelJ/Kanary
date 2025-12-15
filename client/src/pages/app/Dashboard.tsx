import { BsArrowUpRightCircle, BsTrash } from "react-icons/bs";
import { DashboardCard } from "../../../../components/ui/DashboardCard"
import { IdentityMembersTeam } from "../../../../components/ui/IdentityMembersTeam";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Dashboard = () => (
    <div className="h-full w-full pl-3.75">    
        <div className="flex items-center justify-between p-5 w-full h-17.5">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <h4>This week  ^</h4>
        </div>
        <section className="bg-[#0F0B15] h-[calc(100%-90px)] w-[96%] rounded-3xl">
            <div className="pt-5 pl-3.75 h-[7%]">
                <h4>Projeto Festival Fashion ^</h4>
            </div>
            <div className="h-[35%] gap-2.5 w-full p-3.75 flex justify-around">
                <DashboardCard title="Total" icon={<BsArrowUpRightCircle/>} quantidade={68}/>
                <DashboardCard title="Finalizado" icon={<BsArrowUpRightCircle/>} quantidade={22}/>
                <DashboardCard title="Em andamento" icon={<BsArrowUpRightCircle/>} quantidade={8}/>
                <DashboardCard title="Pendente" icon={<BsArrowUpRightCircle/>} quantidade={2}/>
            </div>
            <div className="flex gap-2.5 h-[58%] p-3.75 ">
                <div className="h-full w-[65%] flex flex-col">
                    <h4 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">Progresso do projeto</h4>
                </div>
                <div className="h-full p-3.75 pt-5 w-[35%] rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                    <div className="flex justify-between pb-2.5">
                        <h4>Membros de Time</h4>
                        <h3>+</h3>
                    </div>
                    <div className="grow m-0.5">
                        <IdentityMembersTeam icon={<IoPersonCircleOutline/>} name="Clark Griffin" profession="Ul Designer" icon2={<BsTrash/>}/>
                        <IdentityMembersTeam icon={<IoPersonCircleOutline/>} name="Clark Griffin" profession="Ul Designer" icon2={<BsTrash/>}/>
                        <IdentityMembersTeam icon={<IoPersonCircleOutline/>} name="Clark Griffin" profession="Ul Designer" icon2={<BsTrash/>}/>
                        <IdentityMembersTeam icon={<IoPersonCircleOutline/>} name="Clark Griffin" profession="Ul Designer" icon2={<BsTrash/>}/>

                    </div>                    
                    <div className="self-end">
                        <h6>Ver todos os membros</h6>
                    </div>                   
                </div>
            </div>
        </section>
    </div>
);
