import StatCard from "../../components/dashboard/StatCard";

export default function CoordinatorDashboard() {
    return(
        <>
            <div className="DshHeader">
                <h1>My Space</h1>
                <span>tracking your academic project</span>
            </div>
        
            <StatCard />
        </>
    );
}