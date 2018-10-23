import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegAdded from 'components/register/RegAdded'

const RegAddedPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegAdded />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegAddedPage