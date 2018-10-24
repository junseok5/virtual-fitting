import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegAddedContainer from 'containers/register/RegAddedContainer'

const RegAddedPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegAddedContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegAddedPage