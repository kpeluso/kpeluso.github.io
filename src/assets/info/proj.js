import React from 'react';

const proj = [
  {
    head: 'Projects',
    leaf: false,
    key: 'proj-1',
    items: [
      {
        head: 'Lava, 2018',
        leaf: true,
        key: 'proj-1-1',
        items: [
          'Open-source, decentralized random number generation',
          <a href="https://github.com/kpeluso/lava" target="_blank">Check it out on GitHub!</a>
        ]
      },
      {
        head: 'Meetr, 2018',
        leaf: true,
        key: 'proj-1-2',
        items: [
          'A tool for enabling productive and useful meetings.',
          <a href="https://mmua.herokuapp.com" target="_blank">Try Meetr!</a>
        ]
      },
      {
        head: 'Head-Controlled RC Car, 2016',
        leaf: true,
        key: 'proj-1-3',
        items: [
          'Completed in a team of 3',
          'Developed a means of controlling an RC using only head movements for the purpose of prototyping an assistive technology',
          'Used Python, Bash, a Rasberry Pi, and other hardware'
        ]
      },
      {
        head: 'Biotech Stock Prediction, 2016',
        leaf: true,
        key: 'proj-1-4',
        items: [
          'Completed in a team of 4',
          'Developed decision tree, logistic regression, SVM, and naïve bayes classifiers in Python to predict the movement of biotech stock prices using clinical trial data, and visualized insights in D3.js'
        ]
      },
      {
        head: 'Wayvepool, 2015',
        leaf: true,
        key: 'proj-1-5',
        items: [
          'Completed during Hack@Brown, 2015',
          'Completed in a team of 4',
          'Designed and wrote the front-end for a webapp in HTML/CSS/JS that enables multiple Spotify users to automatically mix their music interests into a single playlist'
        ]
      }
    ]
  }
]

export default proj;

