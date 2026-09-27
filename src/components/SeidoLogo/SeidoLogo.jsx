import React from 'react';

export default function SeidoLogo({ variant = 'badge', size = 'default', className = '' }) {
  // Variant can be 'badge' (the signature vermilion square badge) or 'wordmark' (inline adaptive SVG)
  
  if (variant === 'badge') {
    return (
      <div 
        className={`seido-logo-badge ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none'
        }}
      >
        <div
          style={{
            width: size === 'large' ? '56px' : size === 'small' ? '36px' : '44px',
            height: size === 'large' ? '56px' : size === 'small' ? '36px' : '44px',
            backgroundColor: '#FF3E13',
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 4px 14px rgba(255, 62, 19, 0.35)',
            overflow: 'hidden'
          }}
        >
          <img 
            src="/seido-logo.jpg" 
            alt="Seido Social Mark" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: size === 'large' ? '1.5rem' : size === 'small' ? '1.05rem' : '1.25rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            SEIDO
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 600, 
              fontSize: size === 'large' ? '0.65rem' : size === 'small' ? '0.5rem' : '0.55rem',
              letterSpacing: '0.28em',
              color: 'var(--accent)',
              marginTop: '2px',
              textTransform: 'uppercase'
            }}
          >
            SOCIAL
          </span>
        </div>
      </div>
    );
  }

  // Pure SVG Wordmark
  return (
    <div 
      className={`seido-logo-wordmark ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}
    >
      <svg 
        width={size === 'large' ? '36' : '28'} 
        height={size === 'large' ? '36' : '28'} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="9" fill="#FF3E13"/>
        {/* Stylized infinity loop representing D-O */}
        <path 
          d="M13 14H18C21.3137 14 24 16.6863 24 20C24 23.3137 26.6863 26 30 26C32.2091 26 34 24.2091 34 22C34 19.7909 32.2091 18 30 18C26.6863 18 24 20.6863 24 24C24 27.3137 21.3137 30 18 30H13V14Z" 
          stroke="white" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          SEIDO
        </span>
        <span 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 600, 
            fontSize: '0.55rem',
            letterSpacing: '0.28em',
            color: 'var(--accent)',
            marginTop: '2px',
            textTransform: 'uppercase'
          }}
        >
          SOCIAL
        </span>
      </div>
    </div>
  );
}
