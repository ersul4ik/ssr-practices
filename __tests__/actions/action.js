import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect' 
import { addTask } from '../../src/shared/actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
