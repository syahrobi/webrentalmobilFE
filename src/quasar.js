import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {

  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QForm,
  QInput,
  QUploader,
  QTable,
  QTh,
  QTr,
  QTd,
  QCard,
  QCardSection,
  QCardActions,
  QFooter,
  QTab,
  QTabs,
  QRouteTab,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QImg,
  
  Notify
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QFooter,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QUploader,
    QTable,
    QTh,
    QTr,
    QTd,
    QCard,
    QCardSection,
    QCardActions,
    QTab,
    QTabs,
    QRouteTab,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
    QImg
   
  },
  directives: {
    
  },
  plugins: {
    Notify
  }
 })