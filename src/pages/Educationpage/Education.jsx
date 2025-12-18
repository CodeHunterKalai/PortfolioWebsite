import './Education.css'

const Education = () => {

     const myEducation = 'Education';
     const details = ' My academic backgrounds'
return (
    <>
    <div className="edu-container">
     <h2 className='text-center'>{myEducation} 🎓</h2>
     <h5 className='text-center text-secondary'>{details} </h5>
     <div className="education ug">
          <div className="edu">
          <h5><b>BSc.,CS (Bachelor Of Computer Science)</b></h5> 
          <h6>
               <span>Institution : </span>
               PMT Arts College, Usilampatti. | 2022 - 2025 <br />
          </h6>
          <h6>
               <span>University : </span>
                Madurai Kamaraj University, Madurai. <br />
          </h6>
          <p>Percentage : 62.43%</p>
     </div>
     <div className="edu-stickers">
          <span className='edu-sticker-1'>🎓</span>
     </div>
     </div>

     {/* HSC */}

     <div className="education ug">
          <div className="edu">
          <h5><b>HSC (Higher Secondary Certificate)</b></h5> 
          <h6>
               <span>School : </span>
               Rm Ps Ramiah Nadar Higher Secondary School, Athipatti.| 2021 - 2022 <br />
          </h6>
               <p>Percentage : 72.33%</p>
          </div>
        
          <div className="edu-stickers">
               <span className='edu-sticker'>🏫</span>
          </div>
            </div>

          {/* SSLC */}

            <div className="education ug">
               <div className="edu">
          <h5><b>SSLC ( Secondary School Leaving Certificate)</b></h5> 
          <h6>
               <span>School : </span>
                Rm Ps Ramiah Nadar Higher Secondary School, Athipatti.| 2019 - 2020 <br />
          </h6>
               <p>Percentage : 60.80%</p>
          </div>
          <div className="edu-stickers">
               <span className='edu-sticker'>🏫</span>
          </div>
          </div>

    </div><br /><br />
    </>
  )
}

export default Education