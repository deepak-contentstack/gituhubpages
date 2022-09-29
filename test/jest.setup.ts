// import '@testing-library/jest-dom'
// //import 'babel-polyfill'
import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import "isomorphic-fetch"
Enzyme.configure({ adapter: new Adapter() });

// mock math.random
jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

afterAll(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})


