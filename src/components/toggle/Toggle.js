import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [state, setState] = useState(false);

    const clickHandler = () => {
        //setState( preState => !preState );
        //previous and next lines are doing same
        setState( !state );
        props.onChange( !state );
    }

    return (
        <button
            onClick = {clickHandler}
            data-testid = 'toggle'
        >
            {state? 'Turn Off' : 'Turn On'}
        </button>
    );
}