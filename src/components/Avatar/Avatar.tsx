import React, { useState } from 'react'
import './Avatar.css'
//import '../DropDown/Dropdown'
import Tooltip from '../Tooltip/Tooltip';
// import cbModal, { ModalFooter, ModalHeader, ModalBody } from '../Modal/Modal'
import Button from '../Button/Button'
// import Search from '../Search/Search'

const defaultProps = {
  avatars: [],
  showPlusSignAfter: 5,
  type: 'text',
  showExtraType: 'button',
  showExtraColor: 'light',
  size: 'small',
  showStatus: false,
  testId: 'cs-avatar'
}

type DefaultProps = Readonly<typeof defaultProps>

export type AvatarProps = {
  avatars?: Array<AvatarData>
  showPlusSignAfter?: number
  type?: 'text' | 'image'
  showExtraType?: string
  showExtraColor?: string
  size?: 'small' | 'large'
  showStatus?: boolean,
  testId?: string
} & Partial<DefaultProps>

export type AvatarData = {
  id: number
  name: string
  image: string
  email: string
  avatarColor: string
}

function displayAvatarContent(type, avatar) {
  let nameInitials = avatar && avatar.name && avatar.name.split(' ')
  let firstInitial = nameInitials[0]
  let lastInitial = nameInitials[nameInitials.length - 1]
  let nameInitialsShort = firstInitial.substring(0, 1) + lastInitial.substring(0, 1)
  if (type === 'image') {
    return <img src={avatar.image} alt={avatar.name} className="Avatar__image" />
  }
  return nameInitialsShort;
}

const searchUser = (users, searchText = '') => {
  if (searchText) {
    return users.filter((user) => {
      return user.name.toLowerCase().includes(searchText.toLowerCase())
    });
  }
  return users;
}
const PopUpComponent = (props) => {
  const { avatars, closeModal } = props;
  const [searchText, setSearchText] = useState('')
  const updateSearchText = (value) => {
    setSearchText(value)
  }
  const filterUsers = searchUser(avatars, searchText)

  return (
    <>

    </>
  )
}

function renderExtraAvatarsButton(showExtraAvatars, showExtraType, extraCount, showExtraColor, avatars) {
  const popUpMembersList = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    // cbModal({
    //   component: props => <PopUpComponent {...props} avatars={avatars} />,
    //   modalProps: {
    //     size: 'tiny',
    //     style: {
    //       overlay: {
    //         zIndex: '1000',
    //       },
    //       content: {
    //       },
    //     },
    //   },
    // })
  }

  if (showExtraAvatars) {
    if (showExtraType === 'button') {
      return (
        <button
          className={`AvatarList__expand-button${extraCount > 9 ? ' AvatarList__expand-button--tiny-text' : ''
            }`}
          onClick={popUpMembersList}
        >
          +{extraCount}
        </button>
      )
    } else if (showExtraType === 'link') {
      return (
        <a role="link"
          className={`AvatarList__expand-link${showExtraColor === 'dark' ? ' AvatarList__expand-link--dark' : ''
            }`}
          onClick={popUpMembersList}
        >
          +{extraCount} others
        </a>
      )
    }
  }
}

function Avatar({ avatars, showPlusSignAfter, type, showExtraType, showExtraColor, size, showStatus, testId }: AvatarProps) {
  if (avatars.length === 1) {
    let avatar = avatars[0]
    return (
      <Tooltip content={avatar.name || avatar.email} position="bottom" showArrow={false}>
        <div style={{ backgroundColor: avatar.avatarColor }} className="Avatar Avatar--single">
          <span className={`Avatar__link ${!avatar.avatarColor ? 'Avatar__link__grey' : ''}`}>
            {displayAvatarContent(type, avatar)}
          </span>
          {showStatus && avatar.status === 'active' && <span className="Avatar__active"></span>}
        </div>
      </Tooltip>
    )
  } else {
    let showExtraAvatars = avatars.length > showPlusSignAfter ? true : false
    let visibleAvatars = []
    let hiddenAvatars = []
    if (showExtraAvatars) {
      visibleAvatars = avatars.slice(0, showPlusSignAfter)
      hiddenAvatars = avatars.slice(showPlusSignAfter)
    } else {
      visibleAvatars = avatars
    }
    return (
      <div className="AvatarList" data-test-id={testId}>
        {visibleAvatars.map(avatar => {
          return (
            <div key={avatar.id}>
              <Tooltip content={avatar.name || avatar.email} position="bottom" showArrow={false}>
                <div style={{ backgroundColor: avatar.avatarColor }} className={`Avatar Avatar--${size}`}>
                  <span className={`Avatar__link ${!avatar.avatarColor ? 'Avatar__link__grey' : 'Avatar__link__white'}`}>
                    {displayAvatarContent(type, avatar)}
                  </span>
                  {showStatus && avatar.status === 'active' && <span className="Avatar__active"></span>}
                </div>
              </Tooltip>
            </div>
          )
        })}
        {renderExtraAvatarsButton(
          showExtraAvatars,
          showExtraType,
          hiddenAvatars.length,
          showExtraColor,
          avatars
        )}
      </div>
    )
  }
}

const AvatarInfo = ({ name, email }) => {
  return (
    <div className="Avatar__info">
      <h6 className="Avatar__name">{name}</h6>
      <span className="Avatar__email">{email}</span>
    </div>
  )
}

Avatar.defaultProps = defaultProps

export default Avatar
export { AvatarInfo }
