import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import User from "./User";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders user data', async () => {
    const fakeUser = {
        name: 'Bill Gates',
        age: '65',
        address: '1835 73rd Ave NE, Medina, WA'
    };

    jest.spyOn(global, 'fetch').mockImplementation((id) => {
        if ( id == '/undefined' ) {
            return console.throw(`There's no id`);
        }
        return Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        });
    });

    await act( async () => {
        render(<User id = '123'/>, container);
    });

    expect(container.querySelector('h3').textContent).toBe(fakeUser.name);
    expect(container.querySelector('h4:first-of-type').textContent).toBe(fakeUser.age);
    expect(container.querySelector('h4:last-of-type').textContent).toBe(fakeUser.address);

    global.fetch.mockRestore();
});