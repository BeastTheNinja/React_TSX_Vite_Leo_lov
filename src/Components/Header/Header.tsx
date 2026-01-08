import { Nav } from "../Nav/Nav"
import '../../styles/GlobalFont.css';

export const Header = () => {
    return (
        <>
            <header className="w-full h-14 relative ">
                <Nav />
                <div className="w-36 h-9 right-0 top-2 absolute justify-start"><span className="text-blue-800 text-3xl font-normal font-['Jura']">Leo</span><span className="text-black text-3xl font-normal font-['Jura']">-Lov</span></div>
            </header>
            <div className="bg-blue-800 h-1.5" />
        </>
    )
}