import "./aboutme.css";
export function AboutMe() {
  return (
      <div>
        {/* Background */}
        <div className="background">
            
            <div className="bg-animation">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
              <div id='stars4'></div>
            </div>
        </div>
        
        {/* About Me Page Content */}
          <div className="about_me_body">
        
          <h1 className="about_me_header">About Me</h1>

          {/* 
            *      
            *   Education
            *
          */}
          <h2 className="about_me_section_header">Education</h2>

          <div>
              
              <div className="about_me_content_block">
              <div className="about_me_title">
                    <h4 className="about_me_title_left">Virginia Tech</h4>
                    <h4 className="about_me_title_right">Aug 2022 - Dec 2025</h4>
                </div>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">Bachelor&apos;s in Computer Science with a Mathematics Minor and intended Cybersecurity Minor</h4>
                </div>
                
                <div className ="about_me_subtitle">
                    <p className="about_me_subtitle_left">Awards: Dean&apos;s List Fall 2022, Dean&apos;s List Fall 2023</p>
                </div>
                <div className ="about_me_subtitle">
                    <p className="about_me_subtitle_left">Relevant Coursework: Cloud Software Development, Computer Systems, Mobile Software Development, Intro to Database Management Systems</p>
                </div>

            </div>
      
          </div>

          {/* 
          *      
          *   Activities
          *
          */}
          <h2 className="about_me_section_header">Activities and Extracurriculars</h2>
          <div>
              
              <div className="about_me_content_block">
                <h3 className="about_me_title">Association for Women in Computing</h3>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">Vice President </h4>
                    <h4 className="about_me_subtitle_right">August 2024 - Present</h4>
                </div>
          
                <div className ="about_me_content_body">
                    <ul>
                        <li>Plan and run weekly club events for over 30 members, coordinating collaborations with 3 tech companies and over 5 other campus organizations.</li>
                        <li>Create and distribute weekly newsletters to over 100 members.</li>
                    </ul>
                </div>
              </div>

              <div className="about_me_content_block">
                <h3 className="about_me_title">Girls Who Code</h3>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">College Mentor</h4>
                    <h4 className="about_me_subtitle_right">October 2024 - Present</h4>
                </div>
                
                <div className ="about_me_content_body">
                    <ul>
                        <li>Serve as a college mentor for the GWC Mentoring Corps, facilitating two coding experiences for high school students while building leadership and financial literacy skills.</li>
                    </ul>
                </div>
                
              </div>

              <div className="about_me_content_block">

                <div>
                  <p className="about_me_footnote">I&apos;m also a member of VT Vilasana and AI/ML club.</p>
                </div>
              </div>

          </div>
    

          {/* 
          *      
          *   Projects
          *
          */}
          <h2 className="about_me_section_header">Projects</h2>
          <div>
              
              <div className="about_me_content_block">
                <h3 className="about_me_title">Association for Women in Computing</h3>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">Vice President </h4>
                    <h4 className="about_me_subtitle_right">August 2024 - Present</h4>
                </div>
          
                <div className ="about_me_content_body">
                    <ul>
                        <li>Plan and run weekly club events for over 30 members, coordinating collaborations with 3 tech companies and over 5 other campus organizations.</li>
                        <li>Create and distribute weekly newsletters to over 100 members.</li>
                    </ul>
                </div>
              </div>

              <div className="about_me_content_block">
                <h3 className="about_me_title">Girls Who Code</h3>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">College Mentor</h4>
                    <h4 className="about_me_subtitle_right">October 2024 - Present</h4>
                </div>
                
                <div className ="about_me_content_body">
                    <ul>
                        <li>Serve as a college mentor for the GWC Mentoring Corps, facilitating two coding experiences for high school students while building leadership and financial literacy skills.</li>
                    </ul>
                </div>
                
              </div>

              <div className="about_me_content_block">
                <div>
                  <p className="about_me_footnote"><a href="/projects">Click here for more projects that I&apos;ve done</a> </p>

                </div>
              </div>

          </div>


          {/* 
          *      
          *   Fun Facts
          *
          */}
          <h2 className="about_me_section_header">More About Me!!!</h2>
          <div>
              
              <div className="about_me_content_block">
                <h3 className="about_me_title">Hobbies</h3>
          
                <div className ="about_me_content_body">
                    <ul>
                        <li>Crocheting and Knitting - I mostly do amigurumi stuff</li>
                        <li>Videogames - Minecraft, Stardew Valley, Dance Central 3, Animal Crossing, Valorant, etc.</li>
                        <li>Things I&apos;ve been experimenting with: <a href="/projects">Making Videogames</a>, <a href="https://tryhackme.com/p/shreyaorange">Open Source Intelligence Challenges</a>, <a href="https://www.duolingo.com/profile/0rangePotatoChip">Duolingo (I&apos;m learning Chinese)</a></li>
                    </ul>
                </div>
              </div>

              <div className="about_me_content_block">
                <h3 className="about_me_title">Interests</h3>
                <div className ="about_me_content_body">
                    <ul>
                        <li>Reading 
                            <ul>
                              <li> Genres: Fantasy, Sci-Fi, Thriller</li>
                              <li> Some of my favorites: The Enchanted by Renee Denfeld, Piranesi by Susanna Clarke, and Hunter by Mercedes Lackey</li>
                            </ul>
                        </li>
                        <li>TV/Movies 
                            <ul>
                              <li> Genres: Thriller/Action, Medical Shows, Comedy</li>
                              <li> Some of my favorites: House MD, Brooklyn 99, The First Frost, and Ghosts</li>
                            </ul>
                        </li>
                        <li>Music 
                            <ul>
                              <li> Top Genres: Indie Pop, K-Pop, Hyperpop, and R&B</li>
                              <li> Some of my favorite artists right now: Leonie Biney, Sabrina Carpenter, brakence, MOIO</li>
                              <li> Some of my favorite songs: Clueless by Ellie Williams, Homesick by MICO, So Cynical (Badum) by LE SSERAFIM, and Speed by The Wrecks</li>
                              <li> Some of my favorite albums: Woodland by The Paper Kites, DEPRESSED BUT MAKE IT COOL by Rahul, how can i pretend by Wasia Project, and Spirit Phone by Lemon Demon</li>
                              <li><a href="https://open.spotify.com/user/shreyathoth?si=de620fb216dc4c6b">Follow me on Spotify!</a></li>
                            </ul> 
                        </li>
                    </ul>
                </div>
                
              </div>


          </div>



      </div>
    </div>
  );
}