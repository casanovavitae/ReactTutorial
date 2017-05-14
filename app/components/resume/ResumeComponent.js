import React from 'react';
import Header from './parts/Header';
import About from './parts/About';
import Resume from './parts/Resume';
import Portfolio from './parts/Portfolio';
import Testimonials from './parts/Testimonials';
import Contact from './parts/Contact';
import Footer from './parts/Footer';

class ResumeComponent extends React.Component {

    constructor(props) {
        super(props);
        /*<Header data={this.state.resumeData.main} />
		        <About data={this.state.resumeData.main} />
		        <Resume data={this.state.resumeData.resume} />*/
    }

    render() {
        return (
            <div className="jumbotron">
              <h1>Hello, world!</h1>
              <p>Text</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
	            <Header/>
		        <About/>
		        <Resume/>
		        <Portfolio/>
		        <Testimonials/>
		        <Contact/>
		        <Footer/>

            </div>
        );
    }

}

export default ResumeComponent;
