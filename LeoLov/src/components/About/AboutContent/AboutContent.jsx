
export function AboutContent(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.content2}</p>
            {props.children}
        </div>
    )
}