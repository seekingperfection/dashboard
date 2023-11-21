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
      red: {
        100: '#fdefef',
        200: '#fceaea',
        300: '#ea5455',
      },
      blue: {
        100: '#0B63F8',
      },
      gray: {
        100: '#F8F8F8',
        200: '#F2F2F2',
      },
      green: {
        100: '#89c758',
        200: '#28c76f',
        300: '#ebfff1',
      },
      orange: {
        100: '#ff8008',
        200: '#e09600',
      },
      yellow: {
        100: '#FCC74D',
        200: '#fcc74d1f',
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
