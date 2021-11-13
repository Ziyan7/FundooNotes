import { render, screen } from '@testing-library/react';
import App from './App'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

// render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
describe ("testing",()=>{
  test('renders learn react link', () => {
    const wrapper = shallow (<App/>);
    expect(wrapper.find("h1").text()).toContain("Testing Enzyme")
  });
})

