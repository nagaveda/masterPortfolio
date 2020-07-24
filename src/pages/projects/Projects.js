import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from "../../components/button/Button";
import {Fade} from 'react-reveal';
import {projectsHeader} from '../../portfolio.js';
import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';
import ProjectsImg from './ProjectsImg';


class Projects extends Component {
	constructor(){
		super();
		this.state = {
			myProjects:[
				{
					"name":"karunyaFeed",
					"description":"A full stack social networking web application ",
					"url":"https://karunyafeed.herokuapp.com/",
					"stack":"React, Node js, Express, MongoDB, Mongoose ODM"
				},
				{
					"name":"Covid-19 Tracker",
					"description":"A web app that interactively displays stats about impact of covid-19 across the globe and country wise.",
					"url":"https://globalcovidtracker.netlify.app/",
					"stack":"React, Material UI, Hooks, data API"
				},
				{
					"name":"Machine Learning Web App",
					"description":"A Web app that performs EDA amd model building taking csv files as input",
					"url":"https://ml-webapp999.herokuapp.com/",
					"stack":"Python, Streamlit framework, Sklearn"

				},
				{
					"name":"Predicting Credit card approvals",
					"description":"Built an automatic credit card approval predictor using machine learning techniques, just like the real banks do.",
					"url":"https://github.com/nagaveda/datascience-predicting-credit-card-approvals",
					"stack":"Python, Numpy, Matplotlib, Scikit-learn"
					
				},
				{
					"name":"Predicting Heart Disease",
					"description":"Built a ML-model predicting whether a patient has heart disease provided data",
					"url":"https://github.com/nagaveda/end-end-heart-disease-classification",
					"stack":"Python, Numpy, Matplotlib, Scikit-learn"
				},
				{
					"name":"Smart Brain",
					"description":"A full stack web app detects face in an image and predicts age",
					"url":"https://github.com/nagaveda/end-end-heart-disease-classification",
					"stack":"Reactjs, Nodejs, Express, Postgresql, clarifai api"
				},
				{
					"name":"Expression Evaluator",
					"description":"Static web app aids students for expressin evaluations and conversions using stack",
					"url":"https://nagaveda.github.io/expressionevaluator/",
					"stack":"HTML, CSS, Javascript, Particles.js"
				},
				{
					"name":"Todo List",
					"description":"Static web app that stores tasks as a todo list",
					"url":"https://nagaveda.github.io/todolist/",
					"stack":"HTML, CSS, Javascript, Particles.js"
				},
				{
					"name":"Customer Behaviour Prediction uisng Neural Network",
					"description":"Used a Deep Neural network as a classification algorithm built from scratch",
					"url":"https://github.com/nagaveda/ML-Project/tree/master",
					"stack":"Python, Numpy, Tensorflow, Matplotlib"
				},
				{
					"name":"Analysing Github history of Scala ",
					"description":"Data science project analysing the github history of scala programming language",
					"url":"https://github.com/nagaveda/datascience-github-history-of-scala-language",
					"stack":"Python, Numpy, scikit-learn, Matplotlib"
				},
				

			]
		}
	}
    render(){
		const theme = this.props.theme;
        return (
					<div className="projects-main">
						<Header theme={theme} />
						<div className="basic-projects">
							<Fade bottom duration={2000} distance="40px">
								<div className="projects-heading-div">
									<div className="projects-heading-img-div">
										{/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
										<ProjectsImg theme={theme} />
									</div>
									<div className="projects-heading-text-div">
										<h1 className="projects-heading-text" style={{ color: theme.text }}>
											{projectsHeader.title}
										</h1>
										<p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
											{projectsHeader["description"]}
										</p>
									</div>
								</div>
							</Fade>
						</div>
						<div className="repo-cards-div-main">
							{this.state.myProjects.map((project) => {
								return <GithubRepoCard repo={project} theme={theme} />;
								
							})}
						</div>
						<Button
							text={"More"}
							className="project-button"
							href="https://github.com/nagaveda"
							newTab={true}
							theme={theme}
						/>
						<Footer theme={this.props.theme} onToggle={this.props.onToggle} />
					</div>
				);
    }
}

export default Projects;