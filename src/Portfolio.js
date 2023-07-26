import You from './component/Youtube'


const Portfolio = (props) =>{
    return(
      <>
        <section id="event" className="vh-100">
          
        </section>  
        <section id="ad" className="vh-100 align-items-center d-md-flex flex-column text-center">
          <h2 className='mb-4'>{props.dbpath.title}</h2>
          <div className="container">
                 <ul className="row">
                   {
                    props.dbpath.youtubelist.map((v, i)=>{
                      return(
                        <li className='col-md-4 mb-3 mb-md-0' key={i}>
                          <You youdomid={v.youdomid} start={v.start} youid={v.youtubeid} ></You>
                        </li>
                      )

                    })
                   }
                    
                   
                  
                 </ul>
          </div>
       
         
         
        </section>
      </>
    )
}

export default Portfolio;