import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import logo2 from '../../assets/UneArte_logo2.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Link to='/'>
                <img src={logo2} alt="Logo UneArte" />
                </Link>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/idealunearte" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} style={{ color: '#343575' }} />
                    </a>
                    <a href="https://www.tiktok.com/@idealunearte" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={24} style={{ color: '#343575' }} />
                    </a>
                    <a href="mailto:uneartecontato@gmail.com">
                        <MdEmail size={24} style={{ color: '#343575' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
