import { Fragment, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../public/img/logo.svg';
import menu from '../public/img/menu.svg';
import language from '../languages/Navbar.json';

const Navbar = ({ locale }) => {
  const router = useRouter();
  const sideNav = useRef();
  const { asPath } = router;

  const navMenu = [
    {
      name: { en: 'Product', es: 'Productos', pt: 'Produtos' },
      type: 'dropdown',
      items: [
        {
          name: {
            en: 'Damage Detection',
            es: 'Detección de daños',
            pt: 'Detecção de danos',
          },
          link: '/damage-detection',
        },
        {
          name: {
            en: 'Claim Assessment',
            es: 'Evaluación de reclamos',
            pt: 'Avaliação de sinistros',
          },
          link: '/claim-estimation',
        },
        {
          name: {
            en: 'Fraud Detection',
            es: 'Detección de fraude',
            pt: 'Detecção de fraude',
          },
          link: '/fraud-detection',
        },
        {
          name: {
            en: 'Photo & Video Capture',
            es: 'Captura de fotografía y vídeo',
            pt: 'Captura de foto e vídeo',
          },
          link: '/photo-video-capture',
        },
      ],
    },
    {
      name: { en: 'Solutions', es: 'Soluciones', pt: 'Soluções' },
      type: 'dropdown',
      items: [
        {
          name: { en: 'Automotive', es: 'Automotor', pt: 'Automotivo' },
          link: '/automotive',
        },
        {
          name: { en: 'Insurance', es: 'Seguro', pt: 'Seguros' },
          link: '/insurance',
        },
      ],
    },
    {
      name: { en: 'Resources', es: 'Recursos', pt: 'Recursos' },
      type: 'dropdown',
      items: [
        { name: { en: 'Media', es: 'Medios', pt: 'Mídia' }, link: '/media' },
        { name: { en: 'Blog', es: 'Blog', pt: 'Blog' }, link: '/blog' },
      ],
    },
    {
      name: { en: 'Enterprise', es: 'Empresa', pt: 'Empresa' },
      type: 'dropdown',
      items: [
        {
          name: {
            en: 'Our Core Technology',
            es: 'Nuestra tecnología principal',
            pt: 'Nossa tecnologia principal',
          },
          link: '/our-core-technology',
        },
        {
          name: {
            en: 'Workflow',
            es: 'Nuestra tecnología principal',
            pt: 'Fluxo de trabalho',
          },
          link: '/workflow',
        },
      ],
    },
    {
      name: { en: 'Pricing', es: 'Precios', pt: 'Preços' },
      type: 'link',
      link: '/pricing',
    },
    // {
    //   name: { en: 'en', es: 'es', pt: 'pt' },
    //   type: 'dropdown',
    //   items: [
    //     { name: { en: 'en', es: 'en', pt: 'en' }, link: '/lang' },
    //     { name: { en: 'es', es: 'es', pt: 'es' }, link: '/lang' },
    //     { name: { en: 'pt', es: 'pt', pt: 'pt' }, link: '/lang' },
    //   ],
    // },
    {
      name: {
        en: 'Contact sales',
        es: 'Contacta con nosotros',
        pt: 'Fale conosco',
      },
      type: 'button',
      link: '/contact-us',
      bgColor: '#1F1F1F',
    },
    {
      name: {
        en: 'Request a Demo',
        es: 'Solicitar una demostración',
        pt: 'Solicite uma demonstração',
      },
      type: 'button',
      link: '/contact-us',
      bgColor: '#195DFF',
    },
  ];

  const changeLanguage = (selectedLocale) => {
    const currentPath = asPath;
    const currentHost = window.location.hostname;

    let newHost = '';
    if (selectedLocale === 'es') {
      newHost = 'es.inspektlabs.com';
    } else if (selectedLocale === 'pt') {
      newHost = 'pt.inspektlabs.com';
    } else {
      newHost = 'inspektlabs.com';
    }

    window.location.href = `https://${newHost}${currentPath}`;
  };

  const generateMenu = () => {
    return navMenu.map((menu, index) => {
      if (menu.type === 'dropdown')
        return (
          <li key={index} className='menu-items'>
            <div className='dropdown'>
              <div
                className={`dropbtn ${
                  menu.items
                    .map((subItem) => subItem.link)
                    .includes(router.asPath)
                    ? 'nav-active'
                    : ''
                }`}
              >
                {menu.name[locale]} 
              </div>
              <div className='dropdown-content'>
                {menu.items.map((subItem, subIndex) =>
                  subItem.link === '/blog' ? (
                    <a
                      key={`${index}-${subIndex}`}
                      href='https://inspektlabs.com/blog/'
                    >
                      {subItem.name[locale]}
                    </a>
                  ) : subItem.link === '/lang' ? (
                    <p
                      key={`${index}-${subIndex}`}
                      onClick={() => changeLanguage(subItem.name[locale])}
                      className='dropdown-item'
                      style={{ cursor: 'pointer', padding: '10px' }}
                    >
                      {subItem.name[locale]}
                    </p>
                  ) : (
                    <Link
                      key={`${index}-${subIndex}`}
                      href={subItem.link}
                      className='dropdown-item'
                    >
                      {subItem.name[locale]}
                    </Link>
                  )
                )}
              </div>
            </div>
          </li>
        );
      else if (menu.type === 'link')
        return (
          <li
            key={index}
            className={`menu-items ${
              menu.link === router.asPath ? 'nav-active' : ''
            }`}
          >
            <Link href={menu.link}>{menu.name[locale]}</Link>
          </li>
        );
      else if (menu.type === 'button')
        return (
          <li key={index} className='menu-items btn-container'>
            <Link href={menu.link}>
              <a className='btn-nav' style={{backgroundColor: menu.bgColor, marginLeft: menu.marginLeft? menu.marginLeft: ''}}>{menu.name[locale]}</a>
            </Link>
          </li>
        );
    });
  };

  const generateMobileMenu = () => {
    return navMenu.map((menu, index) => {
      if (menu.type === 'dropdown')
        return menu.items.map((subItem, subIndex) =>
          subItem.link === '/blog' ? (
            <a
              key={`${index}-${subIndex}`}
              href='https://inspektlabs.com/blog/'
            >
              {subItem.name[locale]}
            </a>
          ) : subItem.link === '/lang' ? (
            <p
              key={`${index}-${subIndex}`}
              onClick={() => changeLanguage(subItem.name[locale])}
            >
              {subItem.name[locale]}
            </p>
          ) : (
            <Link key={`${index}-${subIndex}`} href={subItem.link}>
              <a
                className={`${
                  subItem.link === router.asPath ? 'nav-active mobile' : ''
                }`}
              >
                {subItem.name[locale]}
              </a>
            </Link>
          )
        );
      else
        return (
          <Link key={index} href={menu.link}>
            <a
              className={`${
                menu.link === router.asPath ? 'nav-active mobile' : ''
              }`}
            >
              {menu.name[locale]}
            </a>
          </Link>
        );
    });
  };

  const openNav = () => (sideNav.current.style.width = '350px');

  const closeNav = () => (sideNav.current.style.width = '0');

  useEffect(() => (sideNav.current.style.width = '0'), [router]);

  return (
    <Fragment>
      {/* Mobile Menu */}
      <div ref={sideNav} id='sidenav' className='sidenav'>
        <div className='closebtn' onClick={closeNav}>
          &times;
        </div>
        <div className='logo-sidenav'>
          <Link href='/'>
            <a>
              <Image src={logo} alt='Inspektlabs' />
            </a>
          </Link>
        </div>
        {generateMobileMenu()}
      </div>

      {/* Desktop Menu */}
      <nav className='nav'>
        <div className='m-menu-icon'>
          <Image src={menu} alt='Menu' onClick={openNav} />
        </div>
        <div className='logo'>
          <Link href='/'>
            <a>
              <Image src={logo} alt='Inspektlabs'/>
            </a>
          </Link>
        </div>
        <ul className='menu m-hide'>{generateMenu()}</ul>
      </nav>

      <Link href='/contact-us'>
        <a
          className='request-demo'
          style={
            locale == 'es' || locale == 'pt'
              ? { right: '-97px' }
              : { right: '-59px' }
          }
        >
          {language['Request a demo'][locale]}
        </a>
      </Link>
    </Fragment>
  );
};

export default Navbar;
