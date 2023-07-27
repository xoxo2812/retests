import You from './component/Youtube'
import { Events } from './component/Events'

const Portfolio = (props) =>{
    return(
      <>
        <Events dbpath={props.dbpath}></Events>
        <section id="ad" className="vh-100 align-items-center d-md-flex flex-column text-center">
          <h2 className='mb-4'>{props.dbpath.ad.title}</h2>
          <div className="container">
                 <ul className="row">
                   {
                    props.dbpath.ad.youtubelist.map((v, i)=>{
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