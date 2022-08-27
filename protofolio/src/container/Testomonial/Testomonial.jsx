import './Testomonial.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import { images } from '../../constants';
import npSchool from '../../image/school.jpg';
import sofwraica from '../../image/softwarica.jpg';
const Testomonial = () => {
  const fadeImages = [
    {
      url: npSchool,
      caption: 'St Joseph School North point Darjeeling',
    },
    {
      url: sofwraica,
      caption: 'Softwarica college of IT and E-commerce',
    },
  ];
  return (
    <div className='slide-container'>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className='each-fade' key={index}>
            <div className='image-container'>
              <img src={fadeImage.url} alt='image' />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Testomonial, 'app__testimonal'),
  'testimonial',
  'app__primarybg'
);
