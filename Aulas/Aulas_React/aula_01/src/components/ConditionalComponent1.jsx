function ConditionalComponent1(){

    let count = 0;
    const countEvent = () => {
        console.log(count += 1);
    }
    return(
        <div>
            <button onClick={countEvent}>Clique!</button>
        </div>
    )
}

export default ConditionalComponent1