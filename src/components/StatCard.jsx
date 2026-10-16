import StatCard from "./StatCard";

<div className="mt-6 flex gap-6">
   <StatCard value={followers} label="Followers" />
   <StatCard value={rate} label="PHP per hour" />
</div>

function StatCard({value, label}) {
    return (
       <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{value}</p>
              <p className="mt-1 text-lg">{label}</p>
            </div>   
    );
}
export default StatCard

