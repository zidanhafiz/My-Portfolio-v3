import Link from 'next/link';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className='footer__container'>
        <span>
          Made with ❤️ by{' '}
          <Link
            href='/'
            className='footer__link'
          >
            Zidan
          </Link>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
