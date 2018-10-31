import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ContentWrapper from 'components/common/ContentWrapper'
import UserInfoContainer from 'containers/user/UserInfoContainer'
import Base from 'containers/common/Base'

const UserPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
        <ContentWrapper>
          <UserInfoContainer />
        </ContentWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default UserPage