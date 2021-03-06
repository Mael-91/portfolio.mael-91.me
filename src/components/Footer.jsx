import React from "react"
import brand from "../assets/images/icon-72x72.png"
import githubLogo from "../assets/images/svg/github-logo.svg"
import css from '../assets/css/components/footer.css'
import {slideFromBottom} from "../assets/js/libs/ScrollReveal";
import {RevealElements} from "../assets/js/functions/Animations";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cpYears: null
        }
    }

    componentDidMount() {
        const year = new Date().getFullYear()
        this.setState({cpYear: year})
        RevealElements('[data-anim="footer"]', slideFromBottom)
    }

    render() {
        return <div className={css.footer} data-anim="footer">
            <div className={css.footer_block}>
                <div className={css.footer_content}>
                   <div className={css.footer_site_name}>
                       <img src={brand} alt="logo Mael Constantin"/>
                       <h5>Mael Constantin</h5>
                   </div>
                    <div className={css.footer_nav}>
                        <a href="#">Intro</a>
                        <a href="#skills">Compétences</a>
                        <a href="#technologies">Technologies</a>
                        <a href="#projects">Projets</a>
                        <a href="#">Contacter</a>
                    </div>
                    <div className={css.footer_social}>
                        <a href="https://github.com/Mael-91">
                            <svg viewBox={githubLogo.viewBox} className="icon-github-logo">
                                <use xlinkHref={'#' + githubLogo.id}></use>
                            </svg>
                        </a>
                    </div>
                    <p className={css.footer_mention}>© Copyright {this.state.cpYear}, portfolio.mael-91.me. All Right Reserved</p>
                </div>
            </div>
        </div>
    }
}
