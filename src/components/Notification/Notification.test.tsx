import React from 'react'
import renderer from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import Notification, { JSXMaker, NotificationDom, ErrorJSXMaker } from './Notification'
import Button from '../Button/Button';


describe('Notification', () => {
  it('should render without progressbar', () => {
    const NotificationComponent = () => (Notification({ displayContent: { text: 'With ProgressBar' }, notifyProps: { hideProgressBar: true }, type: 'default' }))
    const tree = mount(<NotificationComponent />)
    expect(tree.find('.Toastify').length).toBe(1);
  });
  // it('should render with closeOnClick', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'With closeOnClick' }, notifyProps: { closeOnClick: true }, type: 'default' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should be able to drag', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'Will drag' }, notifyProps: { draggable: true }, type: 'default' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should close after sometime', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'Should close after sometime' }, notifyProps: { autoClose: true }, type: 'default' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with success type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'success type' }, type: 'success' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with warning type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'warning type' }, type: 'warning' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with message type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'message type' }, type: 'message' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with message type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'error type' }, type: 'error' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with dark type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'dark type' }, type: 'dark' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with shortcut type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'shortcut type' }, type: 'shortcut' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with custom type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'custom type' }, type: 'custom' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render with default type', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'custom type' }, type: 'default' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render displayContent as component', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'displayContent as component', component: <Button>displayContent as component</Button> }, type: 'success' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render position', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { text: 'displayContent as component' }, notifyProps: { position: 'bottom-center' }, type: 'success' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render displayContent as description', () => {
  //     const NotificationComponent = () => (Notification({ displayContent: { description: 'displayContent as description' }, type: 'default' }))
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render displayContent as description', () => {
  //     const NotificationComponent = () => <JSXMaker title='This is the title' description='This is the description' />
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('[description="This is the description"]').length).toBe(1);
  //     expect(tree.find('[description="This is the description"]').debug()).toContain('This is the description')
  // });
  // it('should render as a error object', () => {
  //     const NotificationComponent = () => {
  //         const error = {
  //             "error_message": 'This is the error heading',
  //             "errors": { "single_line": ["is a required field."], "group._metadata.uid": ["is a required field."], "group_ref._metadata.uid": ["is a required field."] }
  //         }
  //         return (
  //             (Notification({ displayContent: { error: error }, type: 'default' }))
  //         )
  //     }
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
  // it('should render as a error object', () => {
  //     const NotificationComponent = () => {
  //         const error = {
  //             "error_message": 'This is the error heading',
  //             "errors": { "single_line": ["is a required field."], "group_meta": ["is a required field."] }
  //         }
  //         return (
  //             <ErrorJSXMaker error={error} title='This is the title' />
  //         )
  //     }
  //     const tree = mount(<NotificationComponent />)
  //     expect([{ single_line: 'is a required field.' }, { group_meta: 'is a required field.' }]).toMatchObject([{ single_line: 'is a required field.' }, { group_meta: 'is a required field.' }]);
  // });
  // it('should render as a notificatinDOM', () => {
  //     const NotificationComponent = () => <NotificationDom iconName="Info" displayToast={'Dummy text'} cta={<Button>Random text</Button>} />
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('[iconName="Info"]').debug()).toContain('Info')
  // });
  // it('should render with CTA', () => {
  //     const NotificationComponent = () => {
  //         return (
  //             (Notification({
  //                 displayContent: { text: 'With ProgressBar' },
  //                 notifyProps: { hideProgressBar: false },
  //                 cta: <Button>Dummy text</Button>,
  //                 type: 'success'
  //             }))
  //         )
  //     }
  //     const tree = mount(<NotificationComponent />)
  //     expect(tree.find('.Toastify').length).toBe(1);
  // });
});
