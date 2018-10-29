import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import NotFound from 'components/common/NotFound'
import Base from 'containers/common/Base'

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <NotFound />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default NotFoundPage