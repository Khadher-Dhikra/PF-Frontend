import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import academicCap from "../assets/academic-cap.png"
import CountUp from "react-countup";
import StatSkeleton from "./statSkeleton";
//import { authService } from "../services/auth.service";

export default function InfoPanel() {
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  const defaultStats = [
    { count: 100, title: "Managed Projects" },
    { count: 0, title: "Active Students" },
    { count: 0, title: "Presentations" },
    { count: 0, title: "Tutors" },
  ]
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    fetch("http://localhost/api/stats.php")
      .then((res) => res.json())
      .then((data) => {
        const safeData = defaultStats.map((def, i) => ({
          ...def,
          count: data[i]?.count ?? 0,
        }));

        setStats(safeData);
        setLoading(false);
      })
      .catch((err) => {
        setStats(defaultStats)
        //setError("Failed to load stats");
        console.log(err)
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      className={`InfoPanel`}
      layoutId="panel"
      transition={{ duration: 0.6, ease:"easeInOut" }}
    >
      <div className="info-content">
        <div className="logo-container">
          <img className="logo" src={academicCap} alt="academic-cap-logo" />
        </div>
        <span className="logo-title">FSTSBZ-Academia</span>
        <p className="subtitle">
          Academic Project Management Platform
        </p>

        <div className="stats-container">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <StatSkeleton key={i} />
            ))
          ) : (
            stats.map((item) => (
              <div className="stat-box" key={item.title}>
                <span className="stat-count">
                  <CountUp 
                    start={0}
                    end={item.count}
                    duration={1.5}
                    redraw
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <p className="stat-title">{item.title}</p>
              </div>
            ))
          )}    
        </div>
      </div>
    </motion.div>
  );
}