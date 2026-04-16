import { useEffect, useState } from "react";
import { statCardConfig } from "../../config/statCard.config";
import { useAuth } from "../../Auth/useAuth";
import { statService } from "../../services/stat.service";

export default function StatCard() {

    const { user } = useAuth();
    const [statsData, setStatsData] = useState({});

    const config = statCardConfig[user?.role] || [];

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await statService.getStats();
                setStatsData(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="statCard-container">
            {
                config.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="statCard">
                            <span>{item.title}</span>

                            <span>{statsData[item.key] ?? "..."}</span>

                            <div className="statCard-icon">
                                <Icon className="statIcon"/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}