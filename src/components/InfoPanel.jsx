import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import academicCap from "../assets/academic-cap.png";
import CountUp from "react-countup";
import StatSkeleton from "./statSkeleton";
import { statService } from "../services/stat.service";

export default function InfoPanel() {
  const defaultStats = [
    { key: "projects", count: 0, title: "Managed Projects" },
    { key: "students", count: 0, title: "Active Students" },
    { key: "defenses", count: 0, title: "Presentations" },
    { key: "tutors", count: 0, title: "Tutors" },
  ];

  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await statService.getPubStats();

        console.log("INFO PANEL DATA:", res);

        const mappedStats = defaultStats.map((item) => ({
          ...item,
          count: Number(res?.[item.key] ?? 0),
        }));

        setStats(mappedStats);
      } catch (err) {
        console.log(err);
        setStats(defaultStats);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <motion.div
      className="InfoPanel"
      layoutId="panel"
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="info-content">
        <div className="logo-container">
          <img className="logo" src={academicCap} alt="logo" />
        </div>

        <span className="logo-title">FSTSBZ-Academia</span>

        <p className="subtitle">Academic Project Management Platform</p>

        <div className="stats-container">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <StatSkeleton key={i} />
            ))
          ) : (
            stats.map((item) => (
              <div className="stat-box" key={item.key}>
                <span className="stat-count">
                  <CountUp
                    key={item.key}
                    start={0}
                    end={item.count || 0}
                    duration={1.5}
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