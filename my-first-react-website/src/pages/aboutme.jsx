import "./aboutme.css";
export function AboutMe() {
  return (
      <div className="about_me_body">
          <h1 className="about_me_header">About Me</h1>

          <div>
            <h2 className="about_me_section_header">Experience</h2>
              
              <div className="about_me_content_block">
                <h3 className="about_me_title">Name</h3>
                <div className="about_me_subtitle">
                    <h4 className="about_me_subtitle_left">Date | Location </h4>
                    <h4 className="about_me_subtitle_right">Location</h4>
                </div>
                
                <div className ="about_me_content_body">
                    <ul>
                        <li>test</li>
                    </ul>
                </div>
                <a href="" className="about_me_link"><p>Project Link</p></a>
            </div>



          </div>

          <div>
            <h2>Activities</h2>
              <div className="project">
                  <h3 className="title">Vice President of Association for Women in Computing (AWC)</h3>
                  <p className="date">October 2024 - Present</p>
                  <p>blah blah blah description blah blah blah descriptionblah blah blah descriptionblah blah blah 
                      descriptionblah blah blah descriptionblah blah blah descriptionblah blah blah descriptionblah</p>              
              </div>
              <div className="project">
                  <h3 className="title">College Mentor for Girls Who Code (GWC)</h3>
                  <p className="date">October 2024 - Present</p>
                  <p>blah blah blah description blah blah blah descriptionblah blah blah descriptionblah blah blah 
                      descriptionblah blah blah descriptionblah blah blah descriptionblah blah blah descriptionblah</p>              
              </div>
              <div>
                <p className="footNotes">I&apos;m also a member of VT Vilasana and AI/ML club.</p>
              </div>
          </div>

          <div>
            <h2>Projects</h2>
              <div className="project">
                  <h3 className="title">Project Name</h3>
                  <p className="date">Date and Location</p>
                  <p>blah blah blah description blah blah blah descriptionblah blah blah descriptionblah blah blah 
                      descriptionblah blah blah descriptionblah blah blah descriptionblah blah blah descriptionblah</p>              
              </div>
              <p className="footNotes"><a href="/projects">Click here</a> for more projects that I&apos;ve done</p>
          </div>

          <div>
            <h2>Fun Facts</h2>
            <ul className="fun_facts">
              <li>Fun Facts</li>

            </ul>
          </div>
          
          
      </div>
  );
}