import React from 'react'
import './projects.css'

function Projects() {

    let a = [10 , 20 ,30, 40];
    let list = a.entries()


    let text = ''
    for (let i of list){
      text += i + `\n` 
    }


console.log(text)


    // a[0] = 0
    // let b = a.find(a => 10 === 10)
    // console.log(b  , a)


  return (
    <div className='banner-main section-padding'>
      <div className="banner ">
        <div className="banner-content">
          <h1 className="banner-title">
            THE PASSION TRYING & SKILL CAN MAKE <br /> A TOP-PERFORMING COMPANY
          </h1>
          <button className="banner-button">LET'S GET STARTED</button>
        </div>
      </div>
    </div>
  )
}

export default Projects