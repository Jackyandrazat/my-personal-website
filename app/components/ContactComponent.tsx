import React from "react";

const ContactMe: React.FC = () => {
    return (
        <section id="contact" className="py-16 text-base-content">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

                <div className="max-w-lg mx-auto bg-base-200 p-8 rounded-lg shadow-lg text-center">
                    <p className="text-lg mb-4">Feel free to reach out to me via email:</p>
                    <p className="text-lg mb-4">Jackyandrazat@gmail.com</p>

                    <a
                        href="mailto:jackyandrazat@gmail.com?subject=Hello%20Jacky&body=I%20would%20like%20to%20connect%20with%20you."
                        className="btn btn-primary"
                    >
                        Send Email
                    </a>


                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-content">
                    <p>🚧 Halaman ini masih dalam tahap pengembangan 🚧</p>
                    <p>🚧 Stay Tune, Tetap tunggu Update Selanjutnya 🚧</p>
                    <p>🚧 Halaman ini masih dalam tahap pengembangan 🚧</p>  {/* Duplikat untuk looping smooth */}
                    <p>🚧 Stay Tune, Tetap tunggu Update Selanjutnya 🚧</p>  {/* Duplikat */}
                </div>
            </div>

        </section>
    );
};

export default ContactMe;
