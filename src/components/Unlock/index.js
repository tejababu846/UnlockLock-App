import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnLocked, setisUnLocked] = useState(false)
  const LockImage = isUnLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const ImageAltText = isUnLocked ? 'Unlocked' : 'locked'

  const ButtonText = isUnLocked ? 'Lock' : 'Unlock'

  const Textpara = isUnLocked
    ? 'Your Divice is Unlocked'
    : 'Your Divice is Locked'

  const onClickbutton = () => {
    setisUnLocked(prevState => !prevState)
  }
  return (
    <>
      <UnlockLockContainer>
        <ImageAndTextContainer>
          <Image src={LockImage} alt={ImageAltText} />
          <Text>{Textpara}</Text>
        </ImageAndTextContainer>
        <Button onClick={onClickbutton}>{ButtonText}</Button>
      </UnlockLockContainer>
    </>
  )
}

export default Unlock
