type AsideButtonProps = {
    label: string;
    icon: React.ReactNode;
}

export const AsideButton = ({label, icon}:AsideButtonProps) => (
    <div className="p-1.5 pl-3 text-xl w-full flex  hover:bg-white/10 items-center rounded-2xl cursor-pointer">
        <aside className="mr-2">{icon}</aside>
        <p>{label}</p>
    </div>
)