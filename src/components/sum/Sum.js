// eslint-disable-next-line import/no-anonymous-default-export
export default ({a, b}) => {
    let result = 'Plase give 2 numbers to sum.';

    if (a && b) {
        result = `${a} + ${b} = ${a + b}`;
    }

    return (
        <div>
            {result}
        </div>
    );
}