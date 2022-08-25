import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
const About = () => {
  const abouts = [
    {
      title: 'Web Development',
      descirption: 'I am a good developer',
      imgUrl: images.about01,
    },
    {
      title: 'Javascript',
      descirption: 'I just love it',
      imgUrl: images.about02,
    },
    {
      title: 'Frontend ',
      descirption: 'Have been fiddeling with frontend for years',
      imgUrl: images.about03,
    },
    {
      title: 'Backend',
      descirption: 'Been working in it for year if not years',
      imgUrl: images.about04,
    },
  ];
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Good Development </span>
        <br />
        Means
        <span> Good business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.descirption}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
