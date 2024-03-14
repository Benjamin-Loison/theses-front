import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const abesLightTheme = {
  dark: false,
  colors: {
    background: '#F9F9FB',
    surface: '#FFFFFF',
    primary: '#252C61',
    'primary-darken-1': '#3700B3',
    secondary: '#00A0DC',
    'secondary-darken-1': '#018786',
    'secondary-darken-2': '#005A8F',
    'orange-abes': '#CF491B',
    'gris-clair' : '#e6e6e6',
    'gris-fonce': '#b3b2b4',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'fond-noir': "#000000",
    'text-dark-blue': "#0B2134",
    'fond-chip-blue': "#ABB9D5"
  }
}

const abesDarkTheme = {
  dark: false,
  colors: {
    background: '#343643',
    surface: '#343643',
    primary: '#FFFFFF',
    'primary-darken-1': '#FFFFFF',
    secondary: '#FFFFFF',
    'secondary-darken-1': '#FFFFFF',
    'secondary-darken-2': '#FFFFFF',
    'orange-abes': '#FFFFFF',
    'gris-clair' : '#FFFFFF',
    'gris-fonce': '#FFFFFF',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'fond-noir': "#09090a",
    'text-dark-blue': "#FFFFFF",
    'fond-chip-blue': "#ABB9D5"
  }
}

export default defineNuxtPlugin((app) => {
  let ssr = true;

  if (!app.ssrContext?.event?.node?.req?.headers?.['user-agent']?.toLowerCase().includes('mobi')) {
    ssr = {
      clientWidth: 1281, // the desired width for initial render. This is a 'lg' breakpoint width
    };
  }

  const vuetify = createVuetify({
     theme: {
        defaultTheme: 'abesLightTheme',
        themes: {
            abesLightTheme,
            abesDarkTheme,
        }
    },
    ssr: ssr,
    display: {
        mobileBreakpoint: 'md'
    },
    locale: {
      locale: 'fr'
    }
  })
  app.vueApp.use(vuetify)
})