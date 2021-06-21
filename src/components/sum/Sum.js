// eslint-disable-next-line import/no-anonymous-default-export
export default ({a, b}) => {
    let msg = 'Plase give 2 numbers to sum.';
    let calc;
    if (a && b) {
        msg = `${a} + ${b} = `;
        calc = a + b;
    }

    return (
        <div>
            {msg}
            <span data-testid = "calc">
                {calc}
            </span>
        </div>
    );
}