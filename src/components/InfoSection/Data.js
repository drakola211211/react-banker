import Svg1 from '../../images/svg-1.svg'
import Svg2 from '../../images/svg-5.svg'
import Svg3 from '../../images/svg-4.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'GET STARTED',
    imgStart: false,
    alt: 'Car',
    img: Svg1,
    dark: true,
    primary: true, 
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you coverd no matter where you are located. All you need in is an internet connections and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    alt: 'Piggybank',
    img: Svg2,
    dark: false,
    primary: false, 
    darkText: true
}


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an accoount is extremely easy',
    description: 'Ger everything set up and ready in under 10 minutes. All you need to do add you information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    alt: 'Paper',
    img: Svg3,
    dark: false,
    primary: false, 
    darkText: true
}