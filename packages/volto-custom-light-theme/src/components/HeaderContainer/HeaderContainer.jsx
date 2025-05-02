// SemanticUI-free pre-@plone/components
import { useSelector } from 'react-redux';
import MobileNavigation from '@kitconcept/volto-light-theme/components/MobileNavigation/MobileNavigation';
import SimboloRS from '../SimboloRS/SimboloRS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

import {
  Anontools,
  LanguageSelector,
  Navigation,
  UniversalLink,
} from '@plone/volto/components';

import SecretariaNome from '../SecretariaNome/SecretariaNome';
import SearchWidget from '../SearchWidget/SearchWidget';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = ({
  pathname,
  siteLabel,
  token,
  siteAction,
  siteTitle,
}) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const nome_sec = navRoot?.nome_secretaria_vinculada;
  const url_sec = navRoot?.url_secretaria_vinculada;

  return (
    <>
      <div className="header">
        <div className="tools-wrapper">
          <SecretariaNome content={nome_sec} url={url_sec} />
          <LanguageSelector />
          <div className="tools">
            {!token && <Anontools />}
            {siteAction &&
              siteAction.map((item) => (
                <UniversalLink key={item.url} href={item.url}>
                  {item.title}
                </UniversalLink>
              ))}
          </div>
          {siteLabel && (
            <div className="intranet">
              <p>{siteLabel}</p>
            </div>
          )}
        </div>
        <div className="logo-nav-wrapper">
          <MobileNavigation pathname={pathname} className="mobile-nav" />
          <div className="simbolo">
            <SimboloRS />
            <a className="header-titulo" href="/">
              {siteTitle}
            </a>
          </div>
          <Navigation pathname={pathname} />

          <div className="search-wrapper navigation-desktop">
            <div className="search">
              <SearchWidget />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a
            href="#main"
            className="btn-scroll"
            style={{
              cursor: 'pointer',
              padding: '25px 29px',
              color: '#fff',
              backgroundColor: '#607F35',
              borderRadius: '50px',
              position: 'fixed',
              bottom: '45px',
              right: '10%',
              zIndex: '9999',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4)',
              border: '3px solid transparent',
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
