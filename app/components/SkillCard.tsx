import React from "react";

interface SkillCardProps {
    skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div
            className="relative px-6 py-3 text-lg text-neutral font-extrabold uppercase border-4 border-black 
        bg-primary rounded-none shadow-[8px_8px_0px_var(--color-base-content)] transition-all duration-300
        hover:shadow-[12px_12px_0px_black] hover:-translate-y-1 hover:rotate-2 hover:bg-secondary
        glitch"
            data-text={skill}>
            {skill}
        </div>
    );
};

export default SkillCard;
