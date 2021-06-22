import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import Card from "./Card";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.useFakeTimers();
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
});

it ('should call onSelect with the timout msg.', () => {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect = {onSelect}/>, container);
    });

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(onSelect).not.toHaveBeenCalled();

    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith('Time is over!');
});

it('should cleanup on being removed', () => {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect = {onSelect}/>, container);
    });

    act(() => {
        jest.advanceTimersByTime(1000);
    });
    expect(onSelect).not.toHaveBeenCalled();

    act(() => {
        render(null, container);
    });

    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).not.toHaveBeenCalled();
});


it('should call onSelect with the choise', () => {
    const onSelect = jest.fn();
    
    act(() => {
        render(<Card onSelect = {onSelect}/>, container);
    });
    
    const angularBtn = container.querySelector('[data-testid="Angular"]');

    act(() => {
        angularBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(onSelect).toHaveBeenCalledWith('Angular');
});