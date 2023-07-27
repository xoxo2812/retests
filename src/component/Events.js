import React from 'react'

export function Events(props) {
    return (
        <section id="event" className="vh-100 py-5 container">
          <h2 className='events d-flex mt-5 px-5'>인기상품 & 동영상 후기</h2>
          <div>
            <ul className='row'>
                {
                    props.dbpath.catfood.map((v, i)=>{
                      return(
                        <li className='col-md-4 p-4' key={i}>
                          <div className='cfs p-5' style={{backgroundColor : `${v.bgcolor}`}}>
                            <img src={v.imgsrc} alt="" className='img-fluid col-md-8 mx-auto d-block' />

                          </div>
                          <div className='desicription'>
                            <strong>{v.txt.pronm}</strong>
                            <p>{v.txt.spronm}</p>
                            <p className='price'>{v.txt.proprice}<span>원</span></p>

                         </div>
                        </li>
                      )
                    })
                   }
            </ul>
          </div>
        </section>  
    )
}
