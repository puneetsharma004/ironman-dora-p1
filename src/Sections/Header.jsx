export const Header = () => {
    return (
        <>
            <header className="bg-transparent z-50 flex justify-between text-white fixed w-full py-6 px-12">
                <div className="flex justify-between items-center gap-6">
                    <div className="bg-transparent flex justify-between items-center gap-1">
                        <img className="w-12 rounded-full" src="/ironman-logo.webp"/>
                        <span className="text-md uppercase font-bold">
                        Ironman
                    </span>
                    </div>
                    <div>
                        <nav className="flex justify-between gap-6 font-semibold ">
                            <p className="cursor-pointer">About Me</p>
                            <p className="cursor-pointer">Contact</p>
                        </nav>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>

                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </div>
                </div>
            </header>
        </>
    )
}
