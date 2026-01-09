import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../styles/GlobalFont.css';

export const FooterLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white px-6 py-10">

            <div className="text-center md:text-left">
                <h2 className="text-3xl font-normal font-['Jura'] mb-4">Adresse</h2>
                <p className="text-base font-normal font-['Inter']">
                    Find os her: <br />
                    <br />
                    Maldive rd. 22,<br />
                    Seychelle Islands
                </p>
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-3xl font-normal font-['Jura'] mb-4">Kontakt</h2>
                <p className="text-base font-normal font-['Inter']">
                    Kontakt os her:<br />
                    <br />
                    email@mail.dk<br />
                    Tlf: 0192 3023
                </p>
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-3xl font-normal font-['Jura'] mb-4">Politik</h2>
                <ul className="text-base font-normal font-['Inter'] space-y-2">
                    <p className="text-base font-normal font-['Inter']">
                        Vores politikker </p>
                    <br />
                    <li>Privatlivspolitik</li>
                    <li>Cookiepolitik</li>
                    <li>Generelle betingelser</li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <h2 className="text-3xl font-normal font-['Jura'] mb-4">Sociale medier</h2>
                <ul className="flex justify-center md:justify-start gap-6 text-3xl">
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
