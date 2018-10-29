import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ContentWrapper from 'components/common/ContentWrapper'
import UserInfoContainer from 'containers/user/UserInfoContainer'
// import AskLeaveModalContainer from 'containers/modal/AskLeaveModalContainer'
// import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'
// import PasswordEditModalContainer from 'containers/modal/PasswordEditModalContainer'
import Base from 'containers/common/Base'

const UserPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ContentWrapper>
          <UserInfoContainer />
        </ContentWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default UserPage