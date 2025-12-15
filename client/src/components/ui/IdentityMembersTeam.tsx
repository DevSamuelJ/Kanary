type IdentityMembersTeamProps = {
    icon: React.ReactNode;
    name: string;
    profession: string;
    icon2: React.ReactNode; 
}

export const IdentityMembersTeam = ({icon, name, profession, icon2}: IdentityMembersTeamProps) => (
    <div className="flex items-center">
        <p className="w-20 text-[40px] cursor-pointer">{icon}</p>
        <div className="w-full">
            <p>{name}</p>
            <p className="text-[12px] font-light">{profession}</p>
        </div>
        <p className="w-12.5 cursor-pointer">{icon2}</p>
    </div>
)