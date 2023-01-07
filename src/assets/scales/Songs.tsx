const Songs = (props: any) => (
  <svg
    width={98}
    height={98}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='a'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={98}
      height={98}
    >
      <path
        d='M65.705 76.237c0-2.199.948-4.307 2.636-5.862 1.688-1.554 3.977-2.428 6.363-2.428h19.283V76c0 2.261-.975 4.43-2.711 6.029-1.736 1.599-4.09 2.497-6.545 2.497H74.704c-2.386 0-4.675-.873-6.363-2.428-1.688-1.554-2.636-3.663-2.636-5.861ZM4 85.71c0-2.199.948-4.308 2.636-5.862 1.687-1.555 3.976-2.428 6.363-2.428H29.71v8.053c0 1.12-.24 2.228-.705 3.263A8.514 8.514 0 0 1 27 91.503a9.344 9.344 0 0 1-3.003 1.848 9.947 9.947 0 0 1-3.542.649h-7.456c-2.387 0-4.676-.873-6.363-2.428C4.948 90.017 4 87.909 4 85.71Z'
        fill='#fff'
        stroke='#fff'
        strokeWidth={8}
        strokeLinejoin='round'
      />
      <path
        d='m29.723 37.262 64.276-14.018M29.723 84.525V18.212L93.999 4v70.323'
        stroke='#fff'
        strokeWidth={8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </mask>
    <g mask='url(#a)'>
      <path d='M-1-6H99v106H-1V-6Z' fill='#fff' />
    </g>
  </svg>
);

export default Songs;
