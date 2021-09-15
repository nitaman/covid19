import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
  return (
    <div className="fs90 text-center mt-4">
      <div className="rounded-pill p-1">
        <div className="d-flex justify-content-center align-items-center">
          <CopyrightIcon className="copyright-icon" />  
          <div className="fs100">The Daily Tohoku Shimbun</div>
        </div>
      </div>
    </div>
  );
};
 
export default Footer;