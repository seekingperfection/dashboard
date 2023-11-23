module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      display: ['Lato', 'sans-serif'],
    },
    screens: {
      sm: '520px',
      md: '768px',
      lg: '990px',
      xl: '1200px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      blue: {
        100: '#0B63F8',
      },
      gray: {
        100: '#F8F8F8',
        200: '#F2F2F2',
        300: '#ADA7A7',
        400: '#666666',
        500: '#131313',
      },
      yellow: {
        100: '#FFBC0F',
      },
      dark: {
        100: '#000000',
        200: '#2c3e50',
        300: '#22292f',
      },
    },
  },
  plugins: [],
}
