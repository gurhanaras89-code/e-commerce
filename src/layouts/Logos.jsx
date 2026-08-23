import React from 'react';

const LogoCloud = () => {
  const logos = [
    { name: 'Hooli', src: '/src/assets/icons/hooli.png' },
    { name: 'Lyft', src: '/src/assets/icons/lyft.png' },
    { name: 'Robinhood', src: '/src/assets/icons/sapka.png' },
    { name: 'Stripe', src: '/src/assets/icons/stripe.png' },
    { name: 'AWS', src: '/src/assets/icons/aws.png' },
    { name: 'Reddit', src: '/src/assets/icons/uzaylı.png' },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] border-t border-gray-100">
      
      {/* LOGO CONTAINER */}
      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '30px 20px',
        }}
      >
        
        {/* LOGOLAR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '90px',
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px',
                height: '55px',
                flexShrink: 0,
              }}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                style={{
                  maxWidth: '100px',
                  maxHeight: '45px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  opacity: 0.65,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default LogoCloud;