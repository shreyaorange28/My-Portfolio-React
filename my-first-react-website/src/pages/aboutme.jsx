import "./aboutme.css";
export function AboutMe() {
  return (
      <div className="about_me_body">
          <h1>About Me</h1>
          <div>
            <h2>Experience</h2>
              <div className="project">
                  <h3 className="title">Undergraduate Researcher for the Virginia Tech National Security Institute</h3>
                  <p className="date">October 2024 - Present</p>
                  <p>blah blah blah description blah blah blah descriptionblah blah blah descriptionblah blah blah 
                      descriptionblah blah blah descriptionblah blah blah descriptionblah blah blah descriptionblah</p>              
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