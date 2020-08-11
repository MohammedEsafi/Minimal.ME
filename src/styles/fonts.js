import { css } from 'styled-components';

import EinaLight from '../fonts/Eina/eina-light.ttf'
import EinaRegular from '../fonts/Eina/eina-regular.ttf'
import EinaSemiBold from '../fonts/Eina/eina-semibold.ttf'
import EinaBold from '../fonts/Eina/eina-bold.ttf'

import FuturaPTLight from '../fonts/FuturaPT/FuturaPT-Web-Light.ttf'
import FuturaPTBook from '../fonts/FuturaPT/FuturaPT-Web-Book.ttf'
import FuturaPTMedium from '../fonts/FuturaPT/FuturaPT-Web-Medium.ttf'
import FuturaPTDemi from '../fonts/FuturaPT/FuturaPT-Web-Demi.ttf'
import FuturaPTBold from '../fonts/FuturaPT/FuturaPT-Web-Bold.ttf'
import FuturaPTHeavy from '../fonts/FuturaPT/FuturaPT-Web-Heavy.ttf'

import AvenirBlack from '../fonts/Avenir/Avenir-Black.ttf'
import AvenirBlackOblique from '../fonts/Avenir/Avenir-BlackOblique.ttf'
import AvenirBook from '../fonts/Avenir/Avenir-Book.ttf'
import AvenirBookOblique from '../fonts/Avenir/Avenir-BookOblique.ttf'
import AvenirHeavy from '../fonts/Avenir/Avenir-Heavy.ttf'
import AvenirHeavyOblique from '../fonts/Avenir/Avenir-HeavyOblique.ttf'
import AvenirMedium from '../fonts/Avenir/Avenir-Medium.ttf'
import AvenirMediumOblique from '../fonts/Avenir/Avenir-MediumOblique.ttf'
import AvenirRoman from '../fonts/Avenir/Avenir-Roman.ttf'
import AvenirOblique from '../fonts/Avenir/Avenir-Oblique.ttf'
import AvenirLight from '../fonts/Avenir/Avenir-Light.ttf'
import AvenirLightOblique from '../fonts/Avenir/Avenir-LightOblique.ttf'

import GorditaBlack from '../fonts/Gordita/Gordita-Black.woff'
import GorditaBlackItalic from '../fonts/Gordita/Gordita-BlackItalic.woff'
import GorditaBold from '../fonts/Gordita/Gordita-Bold.woff'
import GorditaBoldItalic from '../fonts/Gordita/Gordita-BoldItalic.woff'
import GorditaLight from '../fonts/Gordita/Gordita-Light.woff'
import GorditaLightItalic from '../fonts/Gordita/Gordita-LightItalic.woff'
import GorditaMedium from '../fonts/Gordita/Gordita-Medium.woff'
import GorditaMediumItalic from '../fonts/Gordita/Gordita-MediumItalic.woff'
import GorditaRegular from '../fonts/Gordita/Gordita-Regular.woff'
import GorditaRegularItalic from '../fonts/Gordita/Gordita-RegularItalic.woff'
import GorditaThin from '../fonts/Gordita/Gordita-Thin.woff'
import GorditaThinItalic from '../fonts/Gordita/Gordita-ThinItalic.woff'
import GorditaUltra from '../fonts/Gordita/Gordita-Ultra.woff'
import GorditaUltraItalic from '../fonts/Gordita/Gordita-UltraItalic.woff'

import GilroyBlack from '../fonts/Gilroy/Gilroy-Black.ttf'
import GilroyBlackItalic from '../fonts/Gilroy/Gilroy-BlackItalic.ttf'
import GilroyBold from '../fonts/Gilroy/Gilroy-Bold.ttf'
import GilroyBoldItalic from '../fonts/Gilroy/Gilroy-BoldItalic.ttf'
import GilroyExtraBold from '../fonts/Gilroy/Gilroy-Extrabold.ttf'
import GilroyExtraBoldItalic from '../fonts/Gilroy/Gilroy-ExtraboldItalic.ttf'
import GilroyLight from '../fonts/Gilroy/Gilroy-Light.ttf'
import GilroyLightItalic from '../fonts/Gilroy/Gilroy-LightItalic.ttf'
import GilroyMedium from '../fonts/Gilroy/Gilroy-Medium.ttf'
import GilroyMediumItalic from '../fonts/Gilroy/Gilroy-MediumItalic.ttf'
import GilroyRegular from '../fonts/Gilroy/Gilroy-Regular.ttf'
import GilroyRegularItalic from '../fonts/Gilroy/Gilroy-RegularItalic.ttf'
import GilroySemiBold from '../fonts/Gilroy/Gilroy-SemiBold.ttf'
import GilroySemiBoldItalic from '../fonts/Gilroy/Gilroy-SemiboldItalic.ttf'
import GilroyThin from '../fonts/Gilroy/Gilroy-Thin.ttf'
import GilroyThinItalic from '../fonts/Gilroy/Gilroy-ThinItalic.ttf'
import GilroyUltraLight from '../fonts/Gilroy/Gilroy-UltraLight.ttf'
import GilroyUltraLightItalic from '../fonts/Gilroy/Gilroy-UltraLightItalic.ttf'

import CalibreLightTTF from '../fonts/Calibre/Calibre-Light.ttf';
import CalibreLightWOFF from '../fonts/Calibre/Calibre-Light.woff';
import CalibreLightWOFF2 from '../fonts/Calibre/Calibre-Light.woff2';
import CalibreLightItalicTTF from '../fonts/Calibre/Calibre-LightItalic.ttf';
import CalibreLightItalicWOFF from '../fonts/Calibre/Calibre-LightItalic.woff';
import CalibreLightItalicWOFF2 from '../fonts/Calibre/Calibre-LightItalic.woff2';
import CalibreRegularTTF from '../fonts/Calibre/Calibre-Regular.ttf';
import CalibreRegularWOFF from '../fonts/Calibre/Calibre-Regular.woff';
import CalibreRegularWOFF2 from '../fonts/Calibre/Calibre-Regular.woff2';
import CalibreRegularItalicTTF from '../fonts/Calibre/Calibre-RegularItalic.ttf';
import CalibreRegularItalicWOFF from '../fonts/Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWOFF2 from '../fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumTTF from '../fonts/Calibre/Calibre-Medium.ttf';
import CalibreMediumWOFF from '../fonts/Calibre/Calibre-Medium.woff';
import CalibreMediumWOFF2 from '../fonts/Calibre/Calibre-Medium.woff2';
import CalibreMediumItalicTTF from '../fonts/Calibre/Calibre-MediumItalic.ttf';
import CalibreMediumItalicWOFF from '../fonts/Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWOFF2 from '../fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldTTF from '../fonts/Calibre/Calibre-Semibold.ttf';
import CalibreSemiboldWOFF from '../fonts/Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWOFF2 from '../fonts/Calibre/Calibre-Semibold.woff2';
import CalibreSemiboldItalicTTF from '../fonts/Calibre/Calibre-SemiboldItalic.ttf';
import CalibreSemiboldItalicWOFF from '../fonts/Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWOFF2 from '../fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularTTF from '../fonts/SFMono/SFMono-Regular.ttf';
import SFMonoRegularWOFF from '../fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWOFF2 from '../fonts/SFMono/SFMono-Regular.woff2';
import SFMonoRegularItalicTTF from '../fonts/SFMono/SFMono-RegularItalic.ttf';
import SFMonoRegularItalicWOFF from '../fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWOFF2 from '../fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoMediumTTF from '../fonts/SFMono/SFMono-Medium.ttf';
import SFMonoMediumWOFF from '../fonts/SFMono/SFMono-Medium.woff';
import SFMonoMediumWOFF2 from '../fonts/SFMono/SFMono-Medium.woff2';
import SFMonoMediumItalicTTF from '../fonts/SFMono/SFMono-MediumItalic.ttf';
import SFMonoMediumItalicWOFF from '../fonts/SFMono/SFMono-MediumItalic.woff';
import SFMonoMediumItalicWOFF2 from '../fonts/SFMono/SFMono-MediumItalic.woff2';
import SFMonoSemiboldTTF from '../fonts/SFMono/SFMono-Semibold.ttf';
import SFMonoSemiboldWOFF from '../fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWOFF2 from '../fonts/SFMono/SFMono-Semibold.woff2';
import SFMonoSemiboldItalicTTF from '../fonts/SFMono/SFMono-SemiboldItalic.ttf';
import SFMonoSemiboldItalicWOFF from '../fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWOFF2 from '../fonts/SFMono/SFMono-SemiboldItalic.woff2';

const Fonts = css`
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightWOFF2}) format('woff2'), url(${CalibreLightWOFF}) format('woff'),
      url(${CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreLightItalicWOFF2}) format('woff2'),
      url(${CalibreLightItalicWOFF}) format('woff'),
      url(${CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularWOFF2}) format('woff2'), url(${CalibreRegularWOFF}) format('woff'),
      url(${CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreRegularItalicWOFF2}) format('woff2'),
      url(${CalibreRegularItalicWOFF}) format('woff'),
      url(${CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumWOFF2}) format('woff2'), url(${CalibreMediumWOFF}) format('woff'),
      url(${CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreMediumItalicWOFF2}) format('woff2'),
      url(${CalibreMediumItalicWOFF}) format('woff'),
      url(${CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldWOFF2}) format('woff2'), url(${CalibreSemiboldWOFF}) format('woff'),
      url(${CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${CalibreSemiboldItalicWOFF2}) format('woff2'),
      url(${CalibreSemiboldItalicWOFF}) format('woff'),
      url(${CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'), url(${SFMonoRegularWOFF}) format('woff'),
      url(${SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularItalicWOFF2}) format('woff2'),
      url(${SFMonoRegularItalicWOFF}) format('woff'),
      url(${SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumWOFF2}) format('woff2'), url(${SFMonoMediumWOFF}) format('woff'),
      url(${SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumItalicWOFF2}) format('woff2'),
      url(${SFMonoMediumItalicWOFF}) format('woff'),
      url(${SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldWOFF2}) format('woff2'), url(${SFMonoSemiboldWOFF}) format('woff'),
      url(${SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${SFMonoSemiboldItalicWOFF}) format('woff'),
      url(${SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }


  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaThin}) format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaThinItalic}) format('woff');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaUltra}) format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaUltraItalic}) format('woff');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaLightItalic}) format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaRegularItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaMediumItalic}) format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaUltra}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaUltra}) format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaBoldItalic}) format('woff');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gordita';
    src: url(${GorditaBlackItalic}) format('woff');
    font-weight: 900;
    font-style: italic;
  }


  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyThin}) format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyThinItalic}) format('woff');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyUltraLight}) format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyUltraLightItalic}) format('woff');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyLightItalic}) format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyRegularItalic}) format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyMediumItalic}) format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroySemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroySemiBoldItalic}) format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyBoldItalic}) format('woff');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyExtraBold}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyExtraBoldItalic}) format('woff');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyBlackItalic}) format('woff');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirLightOblique}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBook}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBookOblique}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirRoman}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirOblique}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirMediumOblique}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirHeavy}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirHeavyOblique}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBlack}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirBlackOblique}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Eina';
    src: url(${EinaLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Eina';
    src: url(${EinaRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Eina';
    src: url(${EinaSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Eina';
    src: url(${EinaBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTBook}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTDemi}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTHeavy}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${FuturaPTBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
`;

export default Fonts;