import React, { useContext, useState, useEffect } from 'react';
import { ModalContext } from '../components/PopupState'

import './cookiebanner.scss';

export default function CookieBanner() {
  const state = useContext(ModalContext);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(1), 500);
  }, []);

  return (
    <aside className="cookie-banner" style={{ opacity: `${visible}` }}>
      <p>
        We use cookies to give you the best online experience; their use improves our sites' functionality. By browsing this website you consent to the use of cookies. For further information regarding the use of cookies please check our privacy policy.
      </p>
      <button onClick={() => state.setCookieConsent()}>Continue</button>
    </aside>
  );
}