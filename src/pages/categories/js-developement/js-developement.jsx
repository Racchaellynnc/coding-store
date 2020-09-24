import React from 'react';
import CustomButton from '../../../components/buttons/buttons.component'
import {Link} from 'react-router-dom';

const JsBlogPage = () => (
<div>        
    <div className='header'>
        <div className='text-heading'>
        </div>
        <div className="button-wrapper">
            <CustomButton as={Link} to={'/blog'} > 
            Back to Blog Page
            </CustomButton>
        </div>
    </div>
<div className='about-wrapper'>            
    <div className='image-container6'>
    </div>
    <div >
        <div className='blog-content'>
            <div className='blog-title'>
                Which JavaScript Framework is the best? 
            </div>
            <div className='blog-intro'>
                JavaScript is developing so quickly and for some people it can be hard to keep up with all the new changes. If you've looked at job openings, 
                you have probably noticed that a lot of companies want React or React Native. You may have also heard someone who has talked about how simple and 
                clean Vue is to use. There are so many advantages to each framework/library that is hard to say which one is the best. With TypeScript becoming more popular,
                are we going to see more Angular being used?  
            </div> 
            <div className="blog-text">
                <div className="heading">
                   
                </div>
                <table id="customers">
                    <tr>
                        <th> Lets Compare </th>
                        <th>React</th>
                        <th>Vue</th>
                        <th>Angular</th>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td>Jordan Walke</td>
                        <td>Evan You</td>
                        <td>Misko Hevery</td>
                    </tr>
                    <tr>
                        <td>Release Date</td>
                        <td>May 29th, 2013</td>
                        <td>February 2014</td>
                        <td>October 20th, 2010</td>
                    </tr>
                    <tr>
                        <td>Coding Speed</td>
                        <td>Average</td>
                        <td>Fast</td>
                        <td>Slow</td>
                    </tr>
                    <tr>
                        <td>Architecture Flexibility</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Data Binding</td>
                        <td>One-way</td>
                        <td>Two-way</td>
                        <td>Two-way</td>
                    </tr>
                    <tr>
                        <td>Rendering</td>
                        <td>Server Side</td>
                        <td>Server Side</td>
                        <td>Client Side</td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td>Virtual DOM</td>
                        <td>Virtual DOM</td>
                        <td>MVC</td>
                    </tr>
                    <tr>
                        <td>Learning Curve</td>
                        <td>Average</td>
                        <td>Easy</td>
                        <td>Difficult</td>
                    </tr>
                </table>
                <div className="blog-title">
                    How to get started
                </div>
                <div className='heading'> 
                    React 
                </div>
                <div className="blog-text">
                    First, you will need to install the React Library 
                </div>
                <div className='code'>
                npx create-react-app my-app<br></br>
                cd my-app<br></br>
                npm start<br></br>
                </div>
                <div className='heading'> 
                    Vue 
                </div>
                <div className='code'>
                   npm install vue
                </div>
                <div className="blog-text">
                    First, you will need to install the Angular CLI
                </div>
                <div className='code'>
                   npm install -g @angular/cli 
                </div>
                <div className='heading'> 
                    Angular 
                </div>
                <div className="blog-text">
                    First, you will need to install the Angular CLI
                </div>
                <div className='code'>
                   npm install -g @angular/cli 
                </div>
                <div className="heading">
                    Read the documentation here
                </div>
                <div className='link-section'> 
                    <div className="button">
                        <a className="external-link" href="https://reactjs.org/">React </a>
                    </div>
                    <div className="button">
                        <a className="external-link" href="https://vuejs.org/">Vue </a>
                    </div>
                    <div className="button">
                        <a className="external-link" href="https://angular.io/">Angular </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)

export default JsBlogPage;