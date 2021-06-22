import { useEffect } from "react";

export default (props) => {

    useEffect(() => {
        const timoutID = setTimeout(() => {
            props.onSelect('Time is over!');
        }, 5000);

        return () => {
            clearTimeout(timoutID);
        }
    }, [props.onSelect]);

    const options = ['JS', 'React', 'Angular', 'Vue', 'NodeJS'];

    const content = options.map( option => 
        <button 
            key = {option} 
            data-testid = {options}
            onClick = {() => props.onSelect(option)}
        > 
            {option}
        </button>)

    return (
        <div>
            {content}
        </div>
    );
}