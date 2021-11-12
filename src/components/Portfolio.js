import "../assets/css/portfolio.css"
export function Portfolio() {
    return (
        <div className="portfolio">
            <h1 > My Latest Project</h1>
            <h4>Here are some of my works and contibutions </h4>

            <div className="projects">
                <div className="project">
                    <h3 className="projectName">Developer-console (upstox)</h3>
                    <p className="projectDescription">
                        <ul>
                            <li>Migrated existing project to Next gen App.</li>
                            <li>Mavenified , added node monitoring and integrated sumologic to the project.</li>
                            <li>Added coupon integration feature in developer console website. </li>
                            <li>Created admin apis to create, delete, update and modify coupons for adding credits to account.</li>
                            <li>Fixed bugs in production.</li>
                            <li>Created dashboard in grafana to monitor latency of requests and database queries.</li>
                        </ul>
                    </p>
                </div>
                <div className="project">
                    <h3 className="projectName">brokerage-margin calculator (upstox)</h3>
                    <p className="projectDescription">
                        <ul><li>Integrated fetching marketfeed from grpc service.</li>
                            <li>Improved accuracy of brokerage calculation.</li>
                            <li>Fixed bugs in margin and margin calculation.</li>
                            <li>Added feature for Cover order and OCO margin calculation.</li>
                        </ul>
                    </p>
                </div>
                <div className="project">
                    <h3 className="projectName">Chat-app</h3>
                    <p className="projectDescription">
                        <ul>
                            <li>Created frontent of chatapp using ReactJs.</li>
                            <li>Created backend server for chatapp using node.js with raw websocket.</li>
                            <li>Deployed in free server using heroku and also using firebase.</li>
                            <li> Users can login using name.If already user exists, unique name will be assigned to user.</li>
                            <li>Displays people online and can chat with them after selecting them.</li>
                            <li>link: <a href="https://chatapp-service.herokuapp.com/" target="_blank">https://chatapp-service.herokuapp.com/</a></li>
                            </ul><br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}