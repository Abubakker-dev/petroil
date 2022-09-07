tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'black-light': 'rgb(0 0 0 / 50%)',
        gray: '#6C6C6C'
      },
      spacing: {
        large: '1920px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'service': "url('./images/service.webp')",
        'service-1': "url('./images/service_1.webp')",
        'service-2': "url('./images/service_2.webp')",
        'service-3': "url('./images/service_3.webp')",
      }
    }
  }
}