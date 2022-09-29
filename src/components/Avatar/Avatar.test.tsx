import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Avatar, { AvatarInfo } from './Avatar';
import Tooltip from '../Tooltip/Tooltip';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: node => node,
  };
});

describe('Avatar  Component', () => {
  const personAvatars = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: "#99D8CE",
    status: 'active'
  }));
  it('render Single Avatar ', () => {

    const tree = renderer.create(<Avatar avatars={[personAvatars[0]]} />).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render Single Avatar with image', () => {
    const tree = renderer.create(<Avatar avatars={[personAvatars[0]]} type="image" />).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render Single Avatar with Tolltip ', () => {
    let avatarInfo = <AvatarInfo name="Branko Toshin" email="developer@upwork.com"></AvatarInfo>

    const tree = renderer.create(<Tooltip content={avatarInfo} position="right" variantType="light" showArrow={false}>
      <Avatar avatars={[personAvatars[0]]} type="image"></Avatar>
    </Tooltip>).toJSON();
    expect(tree).toMatchSnapshot()
  });
  it('render Avatar List ', () => {
    const tree = mount(<Avatar avatars={personAvatars} />);
    expect(tree.find('.Avatar')).toHaveLength(personAvatars.length - 1);
  });
  it('render Avatar List with images ', () => {
    const tree = mount(<Avatar avatars={personAvatars} type="image" />);
    expect(tree.find('.Avatar__image')).toHaveLength(personAvatars.length - 1);
  });

  it('render Avatar List with Link Expander ', () => {
    const tree = mount(<Avatar avatars={personAvatars} type="image" showPlusSignAfter={5} showExtraType="link" />);
    expect(tree.find('.AvatarList__expand-link')).toHaveLength(1);
  });
  it('render Avatar List with Button Expander ', () => {
    const tree = mount(<Avatar avatars={personAvatars} type="image" />);
    expect(tree.find('.AvatarList__expand-button')).toHaveLength(1);
  });
  it('render Single Avatar with Status ', () => {
    const tree = mount(<Avatar avatars={[personAvatars[0]]} showStatus={true} />);
    expect(tree.find('.Avatar__active')).toHaveLength(1);
  });
  it('render Avatar List with Status ', () => {
    const tree = mount(<Avatar avatars={personAvatars} showStatus={true} showPlusSignAfter={5} />)
    expect(tree.find('.Avatar__active')).toHaveLength(personAvatars.length - 1);
  });
  it('render Avatar List with Avatars no more than showPlusSignAfter ', () => {
    const tree = mount(<Avatar avatars={personAvatars} showPlusSignAfter={6} />
    );
    expect(tree.find('.tippy-wrapper').children()).toHaveLength(personAvatars.length);
  });

  it('render Avatar List with Extra avatars ', () => {
    const tree = mount(<Avatar avatars={personAvatars} showPlusSignAfter={5} />
    );
    expect(tree.find('.tippy-wrapper').children()).toHaveLength(personAvatars.length - 1);
  });
  it('simulate click on  Avatar List Button expander ', () => {

    const e = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
    const tree = shallow(<Avatar avatars={personAvatars} showExtraType="button" />);
    tree.find('.AvatarList__expand-button').simulate('click', e);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);

  });

});