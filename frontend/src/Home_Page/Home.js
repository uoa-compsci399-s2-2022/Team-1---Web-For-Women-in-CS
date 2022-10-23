import React from 'react';
import './Home.css';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import { Link } from "react-router-dom";
import news1 from '../img/test/2.jpeg';
import news2 from '../img/test/3.jpeg';
import events1 from '../img/test/4.avif';
import events2 from '../img/test/5.avif';
import Col from 'react-bootstrap/Col';
import ReactPlayer from "react-player";
function Home() {

  return (
    <div className='page_total'>
      <Col className="d-none d-xxl-block d-xl-block">
        <Header />
      </Col>
      <Col className="d-xl-none d-block">
        <Header_lg />
      </Col>
      <div className='body'>

        <div className='current_link'><Link to='/' className="active_link" > Home</Link></div>

        <div className='intro_title'>Women in Computer Science</div>
        <div className='intro_subtitle'>A showcase of the diverse ways women participate in our faculty, with aims to demonstrate belonging and support of equal opportunities for all genders.</div>
        <div className="line"></div>


        <div className='video'>
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=wqyfIAzI-JI"
              className="react-player"
              width="100%"
              height="100%"
              controls={true} /></div>
        </div>



        <section className='home_bottom_card'>
          <div className="whats_On">What's On</div>

          <div className="event-grid">
            <div className="home_card">
              <img src={news1} alt='img' className='home_img' />
              <div className='home_img_title'>News</div>

              <div className='home_card_title'>A sustainable oasis of nature at the heart of the University</div>

              <div className='home_card_info'>
                <div>Waipapa Taumata Rau, University of Auckland Grounds and Precinct Manager Stanley Jones has no Māori heritage, but describes his role as one of kaitiakitanga or guardian of the University’s natural environments, a role carried out by those before him and those to follow.</div>
              </div>
              <Link to='/news'>
                <div className='home_card_find_out'>Kimihia | Find out {'>'}</div>
              </Link>

            </div>



            <div className="home_card">
              <img src={news2} alt='img' className='home_img' />
              <div className='home_img_title'>News</div>

              <div className='home_card_title'>Legal academic to discuss constitution’s fragile foundations</div>

              <div className='home_card_info'>
                <div>“There are conflicting legal narratives for the British Crown’s claim to sovereignty and as such, Aotearoa’s constitution is unstable,” says Dr Claire Charters, who is sharing her research, thoughts and findings at the annual Bruce Jesson Memorial Lecture this week.</div>
              </div>
              <Link to='/news'>
                <div className='home_card_find_out'>Kimihia | Find out {'>'}</div>
              </Link>

            </div>



            <div className="home_card">
              <img src={events2} alt='img' className='home_img' />
              <div className='home_img_title'>Events</div>

              <div className='home_card_title'>Will Robots Daydream? Professor Gregory Minissale 2022 Inaugural Lecture</div>

              <div className='home_card_info'>
                <div>In popular culture, robots, or androids, can see, act and feel just like us. This lecture asks some difficult questions about vision that need to be addressed before this science fiction fantasy becomes even remotely possible.</div>
              </div>
              <Link to='/events'>
                <div className='home_card_find_out'>Kimihia | Find out {'>'}</div>
              </Link>


            </div>


            <div className="home_card">
              <img src={events1} alt='img' className='home_img' />
              <div className='home_img_title'>Events</div>

              <div className='home_card_title'>PG Picnic</div>

              <div className='home_card_info'>
                <div>Postgrad and PhD Picnic in the Park - with outdoor games
                  Come and join us for the last faculty PG event of the year. Come and meet fellow PG and PhD students and enjoy some sandwiches, sushi and cookies on us. Try your hand at the game of Kubb - a fun team game. They'll be music and (hopefully) sunshine!</div>
              </div>
              <Link to='/events'>
                <div className='home_card_find_out'>Kimihia | Find out {'>'}</div>
              </Link>


            </div>


          </div>

        </section>

      </div>

      <div><Footer /></div>
    </div>
  );
}

export default Home;
