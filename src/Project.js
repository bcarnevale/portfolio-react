import React from 'react';

const Project = () => {
    const projects = [
        {
            name: 'All Good Brew', 
            description: 'A marketplace to sell and promote craft beer.',
            link: 'https://github.com/jmerrigan/allgoodbrew'
        },
        {
            name: 'Tenant Tasker', 
            description: 'Communicate with and set tasks for your housemates.',
            link: 'https://github.com/bcarnevale/tenant-tasker'
        }
    ]

    return (
        projects.map(proj => 
            <div>
                    <h1>{proj.name}</h1>
                    <p>{proj.description}</p>
                    <a href={proj.link}>View project here</a>
            </div>
        )
    )
  }

export default Project; 