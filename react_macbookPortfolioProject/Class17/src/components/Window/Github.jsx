import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'

const GitCard=({data={id:1,image:'',title:'',description:'',tags:[],repoLink:'',demoLink:''}})=>{
    return <div className='card'>
        <img src={data.image} alt=''/>
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className='tag'>
            {
               data.tags.map((tag,idx)=>{
               return <p key={idx}>{tag}</p>
               })
            }
        </div>
        <div className='Link'>
        <a href={data.repoLink} className='repo'>Repository</a>
        {data.demoLink && <a href={data.demoLink} className='demo'><span><i class="ri-gps-fill"></i></span> Live</a>}
        </div>
       
    </div>

}
const Github = () => {
  return (
    <MacWindow >
    <div className='allCards'>
        {githubData.map(project=>{
            return <GitCard data={project}/>
        })}
    </div>
    </MacWindow>
  )
}

export default Github
