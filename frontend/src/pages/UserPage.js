import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ContentWrapper from 'components/common/ContentWrapper'
import UserInfo from 'components/user/UserInfo'

const UserPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ContentWrapper>
          <UserInfo />
        </ContentWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default UserPage