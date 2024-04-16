export default function PostComponent({title, description}){
    return(
        <div className="cor">
            <h3>{title}</h3>
            <p>{description}</p>
            <hr />
        </div>
    )
}