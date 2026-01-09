type DashboardCardProps = {
    title: string;
    icon:React.ReactNode;
    quantidade: number;
}

export const DashboardCard = ({title, icon, quantidade}:DashboardCardProps) => (
    <div className="bg-[#110c1a] h-full w-full p-3.75 rounded-xl border border-white/70 flex flex-col justify-between">
        <div className="flex justify-between">
            <p>{title}</p>
            <p>{icon}</p>
        </div>
        <p className="text-[6vw] ml-2.5">{quantidade}</p>
    </div>
)