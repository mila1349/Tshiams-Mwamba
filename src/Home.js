import React from 'react'
import {motion} from 'framer-motion'
import Text from './Text'
import TextSlideUp from './TextSlideUp'

const initial = {
    y:50,
    opacity:0
}

const view = {
    y:0,
    opacity:1
}

const time = {
    duration:1
}



const once={ once: true }

function Home() {
  return (
    <div className='home'>
        <div className="hero" style={{backgroundImage: "url(billgat.png)"}}>
            <span className='spann small'>
                <div className="image" >
                    <motion.img src="person.png" alt="" initial={initial} whileInView={view} transition={time} viewport={once}/>
                    <motion.div className="line"
                        initial={{height:0, opacity:0}}
                        animate={{height:'100%', opacity:1}}
                        transition={{delay:1, duration:1}}
                    ></motion.div>
                </div>
            </span>

            <div className='text'>
            <h1>
                <Text text="Tshiams"  />   
            </h1>
            <h1>
                <Text text="Mwamba"  />   
            </h1>
            <h3>
                <TextSlideUp>
                Highly resourceful, innovative professional with an extensive background in media communication and customer service. Provide strategic leadership through the use of innovative techniques to accomplish short and long-term goals. Proactively identifies opportunities for advancement and development, and enhances team performance. Ability to make critical decisions during challenges, perform in highly visible positions, and work under pressure. With my expertise and experience, I would like to explore long-term career opportunities with an organization that focuses on the future and has a positive reputation.
                 </TextSlideUp>
            </h3>
            </div>

            <span className='spann big'>
                <div className="image" >
                    <motion.img src="person.png" alt="" initial={initial} whileInView={view} transition={time} viewport={once}/>
                    <motion.div className="line"
                        initial={{height:0, opacity:0}}
                        animate={{height:'100%', opacity:1}}
                        transition={{delay:1, duration:1}}
                    ></motion.div>
                </div>
            </span>
        </div>

        <div className="container education">
            <div className='text'>
                <div className="title">
                    <motion.div className="stripe"
                        initial={{width:0}}
                        whileInView={{width:'100px'}}
                        transition={time}
                        viewport={once}
                    ></motion.div>
                    <h2>
                        <Text text="Education"  />   
                    </h2>
                    {/* <motion.h2 initial={initial} whileInView={view} transition={time} viewport={once}>Education</motion.h2> */}
                </div>
                <motion.span className='edu-span small' initial={initial} whileInView={view} transition={time} viewport={once}>
                    <img src="education.jpg" alt="" />
                </motion.span>
                <ol>
                <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once} whileHover={{}}>
                    <h4>Media Commucation Certificate (2020 - 2021)</h4>
                    <p> FULL SAIL UNIVERSITY - Winter Park, FL</p>
                </motion.div>
                <motion.div className="box"initial={initial} whileInView={view} transition={time} viewport={once}>
                    <h4>Associate of Art (2014 - 2019)</h4>
                    <p>TARRANT COUNTRY COLLEGE - Fort Worth, TX</p>
                </motion.div>
                </ol>
            </div>
            <motion.span className='edu-span big' initial={initial} whileInView={view} transition={time} viewport={once}>
                <img src="education.jpg" alt="" />
            </motion.span>
        </div>

        <div className="container skills">
            <div className="title">
                <motion.div className="stripe"
                    initial={{width:0}}
                    whileInView={{width:'100px'}}
                    transition={time}
                    viewport={once}
                ></motion.div>
                <h2>
                    <Text text="Skills"  />   
                </h2>
                {/* <motion.h2 initial={initial} whileInView={view} transition={time} viewport={once}>Skills</motion.h2> */}
            </div>
            <div className="skill-container">
                <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                    
                    <ul>
                        <li><p>Social Media Monitoring</p></li>
                        <li><p>Inst/fb/twitter/Pinterest</p></li>
                        <li><p>Media Kit Creation</p></li>
                        <li><p>Google workspace</p></li>
                        <li><p>Media analysis & media strategy</p></li>
                        <li><p>Social Media Présence</p></li>
                        <li><p>Face-to-face network Meetup</p></li>
                        <li><p>Online presence</p></li>
                        <li><p>webfolio, blogger, youtube</p></li>
                    </ul>
                </motion.div>
                <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                    
                    <ul>
                        <li><p>Content Creation</p></li>
                        <li><p>Audio/sound</p></li>
                        <li><p>SoundCloud, audacity</p></li>
                        <li><p>garage band</p></li>
                        <li><p>Microsoft Suite</p></li>
                        <li><p>Videographer</p></li>
                        <li><p>Promoting</p></li>
                        <li><p>Engagement</p></li>
                        <li><p>Development</p></li>
                        <li><p>Marketing Digital</p></li>
                        <li><p>Photography</p></li>
                        <li><p>Video editing/animation</p></li>
                    </ul>
                </motion.div>
                <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                    
                    <ul>
                        <li><p>Visual design</p></li>
                        <li><p>Moodboad</p></li>
                        <li><p>The rules of third</p></li>
                        <li><p>the rule in design</p></li>
                        <li><p>Color pallet visual balance indentefy</p></li>
                        <li><p>manipilate viewers</p></li>
                        <li><p>Writing and scheduling posts/buffer</p></li>
                        <li><p>Hootsuite/Planoly/late/IFttt</p></li>
                        <li><p>cloud storage management</p></li>
                        <li><p>dropbox. google storage </p></li>
                    </ul>
                </motion.div>
                <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                    
                    <ul>
                        <li><p>Creating graphics</p></li>
                        <li><p>presenting Canva</p></li>
                        <li><p> google draw</p></li>
                        <li><p>prezy Image Sourcing</p></li>
                        <li><p>Critical Thinking</p></li>
                        <li><p>Visual Storytelling</p></li>
                        <li><p>Voice AI</p></li>
                        <li><p>Media Platforms</p></li>
                        <li><p>Content Creation</p></li>
                        <li><p>graphic design</p></li>
                        <li><p>Prezi,Canva.powton</p></li>
                    </ul>
                </motion.div>
            </div>
        </div>

        <div className="container experience">
            <div className="title">
                <motion.div className="stripe"
                    initial={{width:0}}
                    whileInView={{width:'100px'}}
                    transition={time}
                    viewport={once}
                ></motion.div>
                <h2>
                    <Text text="Experience"/>
                </h2>
                {/* <motion.h2 initial={initial} whileInView={view} transition={time} viewport={once}>Experience</motion.h2> */}
            </div>
            <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                <div className="image-exp">
                    <img src="sosmed.jpg" alt="" />
                </div>
                <div className="text">
                    <h4>Social Media Manager (2020 - 2021)</h4>
                    <p>Volunteering Lumiere Orphanage Home Facility - Forth Worth, TX</p>
                    <ul>
                        <li>Successfully spearhead campaigns on the social media platform Manage social media planning for the executn of marketing strategies and community management.</li>
                        <li>Implemented marketing and promotion tactics that lead, to an increase in website traffic from social media posts</li>
                        <li>Developed marketing content such as blogs, promotional materials and advertisements for social media</li>
                        <li>Identified target market and key segments through in-depth analysis of markets and related trends. Monitored online presence of company's brand to engage with users and strengthen customer relationship</li>
                    </ul>
                </div>
            </motion.div>
            <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                <div className="image-exp">
                    <img src="web.jpg" alt="" />
                </div>
                <div className="text">
                    <h4>Entry level front end web developer (2019 - 2020)</h4>
                    <p>Remote Upwork</p>
                    <ul>
                        <li>Develop and implement quality best-in-class front-end code using leading-edge UX techniques across a broad array of interactive web and mobile projects.</li>
                        <li>Provided front-end website development using WordPress, Hub spot and other editing software. Utilizing advanced html, css, and JavaScript, develop advanced forms with validation, integrate social media development tools, display data using json, and designed creative user experiences.</li>
                        <li>Developing and test across multiple browsers, platforms, and devices, including smartphones and tablets, analyze, recommend and utilize proper programming methodologies and adhere to coding standards, procedures, and techniques</li>
                        <li>Creating clean, maintainable, cross-browser compatible code from mockups Data-informed product development: Analytics and A/B testing. Coded websites using HTML, CSS, JavaScript and jQuery languages.</li>
                        <li>Designing, building and maintaining website using different scripting languages</li>
                        <li>Planning website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding. Providing front-end website development using WordPress, Hub spot and other editing software.</li>
                    </ul>
                </div>
            </motion.div>
            <motion.div className="box" initial={initial} whileInView={view} transition={time} viewport={once}>
                <div className="image-exp">
                    <img src="prod.jpg" alt="" />
                </div>
                    <div className="text">
                        <h4>Lead  Production(2017 - 2019)</h4>
                        <p>ATC – Fort Worth, TX</p>
                        <ul>
                            <li>Drove digital and enterprise collaboration across functional teams, focusing on delivery and continuous process improvement.</li>
                            <li>Devised strategies and roadmaps to support product vision and value to business. Analyzed competitor pages to locate backlink and keyword opportunities.</li>
                            <li>Analyzed and reported social media and online marketing campaign results.</li>
                            <li>Oversaw day-to-day preparation, arranging, and coordinating the manufacturing of goods in line with the goals and objectives of the company Managed production equipment and machinery while keeping to company safety standards and Guidelines.</li>
                            <li>Collaborated with employees to guarantee that all tasks are performed quickly and in compliance with high-quality standards</li>
                            <li>Examined incoming materials and compared to documentation for accuracy and quality</li>
                            
                        </ul>
                    </div>
            </motion.div>
        </div>
        
    </div>
  )
}

export default Home