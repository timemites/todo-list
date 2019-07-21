import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AddTodo from './AddTodo';

configure({ adapter: new Adapter() })
const mockStore = configureMockStore();
const store = mockStore({});

describe("AddTodo Component", () => {
    let component;

    beforeEach(() => {
        component =  shallow(
            <AddTodo store={store}/>);
    });

    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it('should show form initially', () => {
        expect(component.dive().find('form').length).toEqual(1);
    })
    it('should have one submit button', () => {
        expect(component.dive().find('.todo-submit').length).toEqual(1);
    })

});
