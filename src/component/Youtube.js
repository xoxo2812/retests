const Youtube = (props) =>{
    return(
    <div id={props.youdomid}>  
        <iframe 
        width="100%"
            src={`https://www.youtube.com/embed/${props.youid}?start=${props.start}`} 
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
       
    </div>  
    )
}

export default Youtube;