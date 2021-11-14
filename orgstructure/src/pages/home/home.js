import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <>
      <h2 color ={"red"} align={"center"} className={'content-block'}>How to use the  Organizational Structure program</h2>
        <div className={'dx-card responsive-paddings'}>
		<ul>
		  <li>
		  <div className={'container'}>
            You can go to  and see a list of structural units in the form of a tree list  <a href={'http://localhost:3000/#/structure'}  rel={'noopener noreferrer'}>Structure </a>
		</div>	</li>
			<li>
			<div className={'container'}>
			You can create new structural units. Each structure can be linked to another previously created structure (can choose a parent) or can be created freely (without parent selection) </div></li>
			<li>
			<div className={'container'}>
			The structure has filtering, sorting, pagination and search functionality</div></li>
			<li>
			<div className={'container'}>
			The structure's  data  stored in localStorage</div></li>
           
          </ul>

         
        </div>
    </>
)}
