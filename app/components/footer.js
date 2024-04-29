export default function Footer() {
    return (
        <footer className='w-[100%] h-[auto] scolor h-11 mb-0 mt-5 centerxy mr-auto ml-auto'>
            <div id="desktop-footer" className="flex centerx gap-20">
                <div className="mt-[10px]">
                    <p>Redes</p>
                    <a href="https://twitter.com/pokestash"><p>Twitter</p></a>
                </div>
                <div className="mt-[10px]">
                    <p>Contacto</p>
                    <p>MAIL PLACEHOLDER</p>
                </div>
                <div className="max-w-[500px] mt-[10px]">
                    <p>Disclaimer</p>
                    <p className="text-xs	">All information presented on this website regarding the Pokémon Trading Card Game is © The Pokémon Company, Nintendo and/or Game Freak. This website is not produced by, endorsed by, supported by, or affiliated with Pokémon, Nintendo or Game Freak.</p>
                </div>
            </div>
        </footer>
    );
}