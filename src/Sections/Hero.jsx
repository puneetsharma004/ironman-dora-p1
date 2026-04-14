export const Hero = () => {
    return (
        <>
            <section className="bg-[#D11212] font-dazzel text-[#E6D48F] ">
                <section className="overflow-hidden w-full h-[900px] relative px-40 flex flex-col justify-center items-start ">
                    <div className="flex items-center gap-2 ">
                        <div className="absolute w-[1500px] h-[1500px] rounded-full
                  bg-[radial-gradient(circle,_#EDC82C_0%,_rgba(237,200,44,0.4)_30%,_transparent_50%)]
                  blur-3xl absolute -z-0 -top-150 -left-100 opacity-50">
                        </div>
                        <div className="absolute w-[1500px] h-[1500px] rounded-full
                  bg-[radial-gradient(circle,_#EDC82C_0%,_rgba(237,200,44,0.4)_30%,_transparent_50%)]
                  blur-3xl absolute -z-0 -top-100 left-0 opacity-50">
                        </div>
                        <span className="hero-text ">IR</span>

                        <span className="flex justify-end flex-col pt-10">
                        <img
                            src="/ironman-o.webp"
                            alt="O"
                            className="h-[10em] w-auto"
                        />
                    </span>

                        <span className="hero-text">N</span>
                    </div>

                    <p className="hero-text">MAN</p>

                    <div className="pl-4 mt-6 flex flex-col gap-4">
                        <p className="text-white text-xl font-medium  " >
                            Genius. Billionaire. Philanthropist.
                            Tony Stark's <br/> confidence is only matched by his high-flying
                            <br/> abilities as the hero called Iron Man.
                        </p>

                        <p className="text-[#E6D48F] font-bold cursor-pointer">Learn More</p>
                    </div>

                </section>

                <section className="bg-[#D11212] font-dazzel text-white flex justify-center items-start px-40">
                    <div className="flex items-center gap-22 relative">
                        {/*for image at left*/}
                        <div className="relative">
                            <img className="scale-x-[-1] relative z-10" src="/ironman01.webp"/>
                            <div className="w-[800px] -left-[300px] top-[200px] z-0 h-[90%] bg-linear-to-b from-black to-[#D11212] absolute rounded-[100px] opacity-60"/>
                        </div>

                        {/*for Text at right*/}

                        <div className="flex flex-col items-start gap-6 relative">
                            <h1 className="hero-text text-[]">01</h1>
                            <p className="text-6xl font-black">Iron Man's new suit <br/>
                                features adaptive <br/>
                                camouflage, energy <br/>
                                weapons, self-repair, <br/>
                                and advanced flight.</p>
                            <p className="font-medium text-xl">
                                Tony Stark developed the nanotech suit to <br/>
                                enhance versatility and adaptability in <br/>
                                combat, allowing instant reconfiguration <br/>
                                and advanced features to address evolving <br/>
                                threats effectively.
                            </p>
                        </div>
                    </div>


                </section>
                    <div className="h-48 bg-[#D11212] w-full"/>
            </section>
        </>
    )
}
