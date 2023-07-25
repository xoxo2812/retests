import You from './component/Youtube'
import Cat from './component/Cat'

const Portfolio = () =>{
    return(
      <>
      
        <section id="about" className="vh-100 justify-content-center">
          <Cat></Cat>
        </section>
        <section id="event" className="vh-100">

        </section>  
        <section id="ad" className="vh-100 justify-content-center">
          <h2>SNS에서 보는 밥이보약</h2>
          <div className="container">
                 <ul className="row">
                   <li className='col'>
                    <You youdomid="youtude1" start="" youid="tKjkoJez6eo" ></You>
                   </li>
                   <li className='col'>
                    <You youdomid="youtude2" start="" youid="4yxGYBgA2PM" ></You>
                   </li>
                   <li className='col'>
                    <You youdomid="youtude3" start="351" youid="kuxJVwMoUZc" ></You>
                   </li>
                 </ul>
          </div>
       
         
         
        </section>
      </>
    )
}

export default Portfolio;