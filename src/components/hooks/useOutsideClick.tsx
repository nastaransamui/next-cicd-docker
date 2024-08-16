import { useEffect } from 'react';
const idsArray = [
  'en-button',
  'cn-button',
  'th-button',
  'mobile-en-button',
  'mobile-cn-button',
  'mobile-th-button',
];

export default function useOutsideClick(ref: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!idsArray.includes(event.target.id)) {
          var enButton = document.getElementById('en-button');
          var cnButton = document.getElementById('cn-button');
          var thButton = document.getElementById('th-button');
          if (enButton) {
            enButton.classList.remove('en-button-active');
          }
          if (cnButton) {
            cnButton.classList.remove('cn-button-active');
          }
          if (thButton) {
            thButton.classList.remove('th-button-active');
          }
          var enButtonMobile = document.getElementById('mobile-en-button');
          var cnButtonMobile = document.getElementById('mobile-cn-button');
          var thButtonMobile = document.getElementById('mobile-th-button');
          if (enButtonMobile) {
            enButtonMobile.classList.remove('en-button-active');
          }
          if (cnButtonMobile) {
            cnButtonMobile.classList.remove('cn-button-active');
          }
          if (thButtonMobile) {
            thButtonMobile.classList.remove('th-button-active');
          }
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
