export const Tony02 = () => {
    return (
        <>
            <section className="bg-[url(/infinityWarIronman.webp)] scale-x-[-1] object-cover object-center bg-no-repeat text-[#E6D48F] py-24 px-20">
                <div className="gap-22 relative h-screen scale-x-[-1]">

                    <div className="flex flex-col items-start gap-6 relative">
                        <h1 className="hero-text text-[450px]">01</h1>
                        <p className="text-6xl font-black mt-32">
                            Tony Stark, as the <br/> brilliant mind behind <br/> Stark Industries
                        </p>
                        <p className="font-medium text-xl">
                            Tony Stark uses an arc reactor to power his <br/>
                            Iron Man suits and also to prevent shrapnel <br/>
                            from reaching his heart after being injured. <br/>
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <img className="scale-100 blur-[1px] rotate-6 absolute -top-32 z-20" src="/drone.webp"/>
                    <img className="scale-75 blur-[10px] -rotate-6 absolute -top-56 -left-40" src="/drone.webp"/>
                </div>
            </section>
        </>
    )
}
