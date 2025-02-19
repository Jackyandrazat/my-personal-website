import React from "react";
import Card from "./CardComponent"; // Mengimport komponen Card
import { cardsData } from "../data/dataDummyProject"; // Mengimport data dummy

const CardList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {cardsData.map((card, index) => (
                <div
                    key={card.id}
                    className={`relative ${index % 2 === 0 ? "mt-10" : "mb-10"
                        } transform hover:-rotate-2 hover:scale-105 transition-all duration-300`}
                >
                    <Card
                        title={card.title}
                        date={card.date}
                        description={card.description}
                        image={card.image}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardList;
