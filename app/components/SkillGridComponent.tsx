import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../data/skillsData";

const SkillsGrid: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`transform ${index % 2 === 0 ? "rotate-2" : "-rotate-2"
                        } ${index % 3 === 0 ? "mt-3" : "mb-3"}`}
                >
                    <SkillCard skill={skill} />
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
