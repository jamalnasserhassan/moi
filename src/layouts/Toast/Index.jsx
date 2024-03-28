import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import './Toast.scss';

const Toast = ({ type }) => {
  let icon, border;

  if (type === 'pending') {
    icon = (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.683594" y="0.276367" width="54.9744" height="54.9744" rx="27.4872" fill="#FFD16C" />
        <path d="M29.0952 27.1842V21.7066H27.233V28.3332L36.0253 32.7513C34.3466 35.3667 31.4536 37.0744 28.1613 37.0744C23.0179 37.0744 18.8475 32.9049 18.8475 27.7606C18.8475 22.6163 23.0169 18.4468 28.1613 18.4468C33.3037 18.4468 37.4732 22.6153 37.475 27.7578H39.3372C39.3335 21.593 34.3354 16.5977 28.1706 16.5977C22.003 16.5977 17.0039 21.5977 17.0039 27.7643C17.0039 33.931 22.0039 38.931 28.1706 38.931C32.5104 38.931 36.2721 36.4552 38.1203 32.8397L38.1492 32.7764L38.5682 31.9431L29.0952 27.1842Z" fill="#292D32" />
      </svg>
    );
    border = '3.8px solid #FFD16C';
  }

  return (
    <Toaster
      toastOptions={{
        duration: 9000000,
        position: 'top-right',
        style: {
          maxWidth: 'unset',
          borderRadius: '16px',
          padding: '0px',
          borderRight: border
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div className='Notify'>
              <div className="Notify__right">
                <div>{icon}</div>
                <div className='message'>{message}</div>
              </div>
              {t.type !== 'loading' && (
                <div className="Notify__left">
                  <button onClick={() => toast.dismiss(t.id)}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6671 12.178L6.24053 7.7514L1.81392 12.178C1.4958 12.4961 0.980067 12.4961 0.662485 12.178L0.302559 11.8181C-0.0155664 11.5 -0.0155664 10.9842 0.302559 10.6666L4.72916 6.24004L0.302559 1.81344C-0.0155664 1.49531 -0.0155664 0.979579 0.302559 0.661997L0.662485 0.30207C0.98061 -0.0160547 1.49634 -0.0160547 1.81392 0.30207L6.24053 4.72868L10.6671 0.30207C10.9853 -0.0160547 11.501 -0.0160547 11.8186 0.30207L12.1785 0.661997C12.4966 0.980121 12.4966 1.49585 12.1785 1.81344L7.75189 6.24004L12.1785 10.6666C12.4966 10.9848 12.4966 11.5005 12.1785 11.8181L11.8186 12.178C11.5004 12.4961 10.9847 12.4961 10.6671 12.178Z" fill="#BFC0C3"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Toast;