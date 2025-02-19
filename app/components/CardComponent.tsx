import React from "react";

interface CardProps {
    title: string;
    date: string;
    description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, date, description, image }) => {
    return (
        <div className={`w-80 min-h-[${Math.random() * (500 - 300) + 300}px] border-4 border-black bg-primary rounded-none 
            hover:bg-secondary hover:text-accent hover:border-secondary 
            hover:shadow-[8px_8px_0px_black] transition-all duration-200`}>
            <a href="#" className="block cursor-pointer">
                <article className="w-full h-full">
                    {/* Gambar */}
                    <figure className="w-full h-40 border-b-4 border-black">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </figure>

                    {/* Konten */}
                    <div className="px-6 py-5 text-left h-full">
                        <p className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-600">
                            {date}
                        </p>
                        <h1 className="text-3xl font-extrabold mb-4 uppercase text-neutral">
                            {title}
                        </h1>
                        <p className="text-sm leading-snug mb-4 line-clamp-4 text-neutral">
                            {description}
                        </p>

                        {/* Tombol dengan efek hover */}
                        <button className="text-lg border-4 border-black px-4 py-2 bg-neutral 
                    hover:bg-primary hover:text-info hover:border-black 
                    transition-all duration-200">
                            Read More
                        </button>
                    </div>
                </article>
            </a>
        </div>
    );
};

export default Card;
