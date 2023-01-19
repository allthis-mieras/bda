import Address from './address'
import Approach from './approach'
import Button from './button'
import ButtonGroup from './buttonGroup'
import Card from './card'
import Cta from './cta'
import Experts from './experts'
import Filter from './filter'
import Footer from './footer'
import Grid from './grid'
import Header from './header'
import ImageSection from './imageSection'
import Intro from './intro'
import Link from './link'
import LinkList from './linkList'
import Logos from './logos'
import Nav from './nav'
import Newsletter from './newsletter'
import Panorama from './panorama'
import SliceZone from './sliceZone'
import StickyContent from './stickyContent'
import Team from './team'
import TextBlock from './textBlock'
import TextImage from './textImage'
import TextSection from './textSection'

const components = {
  Address,
  Approach,
  Button,
  ButtonGroup,
  Card,
  Cta,
  Experts,
  Filter,
  Footer,
  Grid,
  Header,
  ImageSection,
  Intro,
  Link,
  LinkList,
  Logos,
  Nav,
  Newsletter,
  Panorama,
  SliceZone,
  StickyContent,
  Team,
  TextBlock,
  TextImage,
  TextSection,
  Heading: {
    fontWeight: 'normal',
    sizes: null, // remove default sizes from heading
  },
  Modal: {
    baseStyle: {
      dialogContainer: {
        '@supports(height: -webkit-fill-available)': {},
      },
    },
  },
}

export default components
