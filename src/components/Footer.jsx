import PrivacyPolicy from '../docs/PrivacyPolicy.pdf';
import TermsOfUse from '../docs/TermsOfUse.pdf'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__top">
                <h3>Unlock Expert Guidance</h3>
                <p>Tel.: <a href="tel:+35799911223">+35799911223</a> <br/>Email: <a href="mailto:info@prolegal.group">info@prolegal.group</a></p>
            </div>
            <div className="footer__bottom">
                <div>Pro Legal Group Corporation. All Rights Reserved.</div>
                <div className="footer__docs">
                    <a href={PrivacyPolicy} rel='noreferrer' target='_blank'>Privacy Policy</a>
                    <a href={TermsOfUse} rel='noreferrer' target='_blank'>Terms of Use</a>
                </div>
            </div>
        </footer>
    )
}

export {Footer}