import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer: React.MemoExoticComponent<() => JSX.Element> = React.memo(() => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5'>
          <div>Get currency rate between fiat/fiat, crypto/fiat, fiat/crypto and crypto/crypto.</div>
          <div>
            <b>Note on Rate limit:</b> Only 25 requests per 24 hours is permitted and after this limit has been reached
            the endpoint will return Rate Limit Exceeded message. A workaround is to use VPN.
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright: Abayomi Amusa
      </div>
    </MDBFooter>
  );
})

export default Footer;