export const WarM03 = () => {
    return (
        <>
            <section className="bg-linear-to-b from-[#5C0808] to-black font-dazzel font-dazzel text-[#E6D48F] pt-20">

                <section className=" text-white flex justify-center items-start">
                    <div className="grid grid-cols-2 relative">
                        {/*for image at left*/}
                        <div className="relative">
                            <img className="relative scale-100 z-10 items-center" src="/warmachine.webp"/>
                            <div className="w-[800px] -left-[300px] top-[100px] z-0 h-[90%] bg-linear-to-b from-[#D11212] to-[#5C0808] absolute rounded-[100px] opacity-60"/>
                        </div>

                        {/*for Text at right*/}
                        <div className="flex flex-col items-start gap-6 relative">
                            <h1 className="hero-text">03</h1>
                            <p className="text-6xl font-black">
                                War Machine, aka <br/>
                                James "Rhodey" Rhodes,
                                is Iron Man's loyal ally.
                            </p>
                            <p className="font-medium text-xl">
                                After the events of Civil War, Rhodey suffered a <br/>
                                serious injury during a battle, leaving him <br/>
                                paralyzed. He was later fitted with mechanical <br/>
                                leg braces and continued to serve as <br/>
                                War Machine.
                            </p>
                        </div>
                    </div>


                </section>

                <section className="relative h-screen w-full ">

                    <div className="absolute inset-0 bg-[url('/avengers.webp')] bg-cover bg-center w-full h-screen opacity-20"></div>

                    <div className="relative z-10 flex flex-col justify-end items-center h-full px-10 py-20 text-white text-9xl">
                        <h1 className="font-bold">I AM</h1>
                        <h1 className="font-extrabold">IRONMAN</h1>
                    </div>

                </section>
                <footer className="bg-black px-20 pt-10 pb-30 text-white">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-8xl font-bold">Ironman</h1>
                                <p className="text-4xl">ironman.design</p>
                            </div>
                            <div className="flex justify-between gap-40 text-2xl font-bold">
                                <div>
                                    <p>YouTube</p>
                                    <p>LinkedIn</p>
                                    <p>Instagram</p>
                                </div>
                                <div className="mr-20">
                                    <p>FaceBook</p>
                                    <p>Unsplash</p>
                                </div>
                            </div>
                        </div>
                </footer>
            </section>
        </>
    )
}
