import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import NotFound from 'components/common/NotFound'
import Base from 'containers/common/Base'

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <Base />
      <MainTemplate>
        <NotFound />
      </MainTemplate>
    </PageTemplate>
  )
}

export default NotFoundPage