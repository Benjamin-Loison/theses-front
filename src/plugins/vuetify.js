// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'


// Vuetify
import { createVuetify } from 'vuetify'
import { aliases } from "../components/icons/custom-icon";

const myCustomLightTheme = {
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

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases
  },
  display: {
    mobileBreakpoint: 'md'
  },
  components: {
    VSkeletonLoader
  }
})
