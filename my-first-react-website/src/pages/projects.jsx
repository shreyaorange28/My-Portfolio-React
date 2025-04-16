import "./projects.css";
export function Projects() {
    return (
        <div className="page_body">
            <h1 className="project_header">Projects</h1>
            {/* Template for each content block */}

            {/* <div className="project_content_block">
                <h2 className="project_title">Name</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technologies Used: </h3>
                    <h3 className="project_date">Date</h3>
                </div>
                
                <ul className ="project_content_body">
                    <li>test</li>
                </ul>
                <a href="" className="project_link"><p>Project Link</p></a>
            </div> */}

            <div className="project_content_block">
                <h2 className="project_title">This Website!</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technologies Used: React, HTML, CSS, Javascript, Git, Netlify</h3>
                    <h3 className="project_date">January 2024-Present</h3>
                </div>
                
                <div className ="project_content_body">
                    <ul>
                        <li>Designed and developed a responsive personal website from scratch using React to showcase my background, projects, and contact information.</li>
                        <li>Built individual pages using React components with HTML and CSS, including a Home, About Me, Projects, and Contact page.</li>
                        <li>Implemented interactive and creative features like a custom navigation bar, animated page titles that grow on hover, and color-changing elements across each page</li>
                    </ul>
                </div>
                <a href="/" className="project_link"><p>Deployed Using Netlify</p></a>
            </div>

            <div className="project_content_block">
                <h2 className="project_title">Unity Personal Project: 2D Platformer Game</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technology Used: Unity, C#, Visual Studio 2022, Git</h3>
                    <h3 className="project_date">December 2024</h3>
                </div>
                
                <div className ="project_content_body">
                    <ul>
                        <li>Designed and developed a tile-based 2D platformer game in Unity, incorporating animations, tilemaps, and physics-based gameplay mechanics.</li>
                        <li>Added gameplay features including collectible fruits with score tracking, respawn mechanics for hazards (spikes, spinning blades), and level transitions between three levels.</li>
                        <li>Implemented a moveable character with idle, run, and jump animations, a camera-follow system, and collision detection.</li>
                    </ul>
                </div>
                <a href="https://github.com/shreyaorange28/My_First_2D_Platformer_Unity" className="project_link"><p>Github Repository</p></a>
            </div>

            <div className="project_content_block">
                <h2 className="project_title">CS 3214 Project 2: Fork-Join Thread Pool</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technologies Used: C, VSCode, Git</h3>
                    <h3 className="project_date">October 2024</h3>
                </div>
                
                <div className ="project_content_body">
                    <ul>
                        <li>Collaborated with a partner to implement a multi-threaded, fork-join thread pool with a work-stealing approach.</li>
                        <li>Optimized performance by replacing a global lock with multiple locks and enabling workers to assist with incomplete or stolen tasks for improved efficiency.</li>
                    </ul>
                </div>
            </div>

            <div className="project_content_block">
                <h2 className="project_title">React Personal Project: Tic Tac Toe Game</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technology Used: React, JavaScript, Node.js</h3>
                    <h3 className="project_date">July 2024</h3>
                </div>
                
                <div className ="project_content_body">
                    <ul>
                        <li>Followed tutorial to explore features of React, developing skills in building web applications</li>
                        <li>Created a game that allows users to play tic tac toe and stores version history</li>
                    </ul>
                </div>
                <a href="https://github.com/shreyaorange28/my-first-react-app/" className="project_link"><p>Github Repository</p></a>
            </div>
            
            <div className="project_content_block">
                <h2 className="project_title">CS 3754 Assignment 3: Cocktails</h2>
                <div className="project_subtitle">
                    <h3 className="project_technologies">Technologies Used: WildFly, MySQL, Java, CSS, XHTML, JavaServer Faces, IntelliJ</h3>
                    <h3 className="project_date">March 2024</h3>
                </div>
                
                <div className ="project_content_body">
                    <ul>
                        <li>Displayed a database of 50 cocktails through APIs, integrating them into tables on a website with filtering and searching capabilities.</li>
                        <li>Enabled users to edit or add data directly on the website.</li>
                        <li>Deployed to Amazon EC2 Virtual Private Server</li>
                    </ul>
                </div>
                <a href=" http://13.59.117.68:8080/Cocktails-Thothathri/" className="project_link"><p>Project Link</p></a>
            </div>

        </div>
    );
}