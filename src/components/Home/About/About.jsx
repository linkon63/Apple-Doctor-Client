import React from 'react';
import PagesLayout from '../../Layout/PagesLayout';

import aboutBanner from '../../../asset/aboutBaner/bannerAbout.jpg'

import content from '../../../asset/about-icon/content.png'
import mango from '../../../asset/about-icon/mango.png'
import orange from '../../../asset/about-icon/orange.png'

import './About.css'
import { ArrowRight } from '@material-ui/icons';
const About = () => {
    return (
        <PagesLayout>
            <section>
                <div>
                    <img src={aboutBanner} alt="" />
                    <span className='about-head-content'>
                        <h2>APPLE REPAIR
                        </h2>
                        <p className='paragraph-aboutHeader'>
                            We’re here to help. Apple-certified repairs are performed by trusted experts who use genuine Apple parts. Only Apple-certified repairs are backed by Apple. Whichever option you choose, you’ll get your product back working exactly the way it should.</p>
                    </span>
                </div>

                <div className='bottom'>
                    <div className='about-flex-box'>
                        <div className='box'>
                            <img src={orange} alt="" />
                            <h2>Send your product to Apple</h2>
                            <p>Online or over the phone, we'll arrange shipment for your product to an Apple Repair Center — all on your schedule and without an appointment. This service is available for most Apple products.</p>
                        </div>
                        <div className='box'>
                            <img src={mango} alt="" />
                            <h2>Find an Apple Authorized Service Provider</h2>
                            <p>Our network of Apple Authorized Service Providers give you lots of convenient locations for Apple repairs. In some areas, you can even schedule a technician to perform an iPhone screen repair at your home or office.</p>
                        </div>
                        <div className='box'>
                            <img src={content} alt="" />
                            <h2>Visit a Genius at an Apple Store</h2>
                            <p>You can do more than shop and learn in an Apple Store. Start a repair request below to make a reservation with a Genius to get help with a hardware repair.</p>
                        </div>
                    </div>
                    <div className='flexBox-button'>
                        <a target="_blank" href="">START A REPAIR REQUEST</a>
                    </div>
                    <div className='flexBox-button-link'>
                        <a target="_blank" href="">Track the status of an existing repair<ArrowRight /></a>
                    </div>
                </div>
                <div className='section'>
                    <h2 className='text-center mt-5'>Other Repair Options</h2>
                    <div class="about-paragraph">
                        <h2>Independent Repair Providers</h2>
                            <p>
                            Independent Repair Providers have access to genuine Apple parts and repair resources. Independent Repair Providers do not provide repairs covered by Apple's warranty or AppleCare plans* but may offer their own repair warranty. You can check if a provider is an <a class="paragraph-link" href="">Independent Repair Provider or an Apple Authorized Service Provider.</a>  
                            </p>
                    </div>
                    <div class="about-paragraph">
                        <h2>Self Service Repair</h2>
                      <p>
                      Self Service Repair is intended for individuals with the knowledge and experience to repair electronic devices. If you are experienced with the complexities of repairing electronic devices, Self Service Repair provides you with access to genuine Apple parts, tools, and repair manuals to perform your own out-of-warranty* repair. To learn more, please visit the <a class="paragraph-link" href="">Self Service Repair</a> page.
                      </p>

                    </div>

                    <br />
                    <div class="about-paragraph">
                        <p>
                            Learn more about your <a class="paragraph-link" href="">Apple Limited Warranty or AppleCare Product coverage status.</a>
                        </p>
                    </div>

                    <br />

                    <div class="about-paragraph">
                       <p>
                       *Unless required by law, repairs made by Independent Repair Providers or through Self Service Repair are not backed by Apple. Damage caused by repairs performed outside of Apple or the Apple Authorized Service Provider network is not covered by Apple’s Limited Warranty or an AppleCare plan.
                       </p>
                    </div>
                </div>
            </section>

        </PagesLayout>
    );
};

export default About;