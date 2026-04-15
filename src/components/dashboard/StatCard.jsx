import { statCardConfig } from "../../config/statCard.config";
import { useAuth } from "../../Auth/useAuth";

export default function StatCard() {
    const {user} = useAuth();
    const stat = statCardConfig[user?.role] || [];

    console.log(user.role)
    console.log(stat)

    return(
        <div className="statCard-container">
            {
                stat.map((item, index)=>{
                    const Icon = item.icon;
                    return(
                        <div key={index} className="statCard">
                            <span>{item.title}</span>
                            <span>En cours</span>
                            <span>systeme de gestion DH</span>

                            <div className="statCard-icon">
                                <Icon className="statIcon"/>
                            </div>
                        </div>
                    )
                })  
            }
        
        </div>
    );
}