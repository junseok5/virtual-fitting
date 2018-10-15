import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import NotFound from 'components/common/NotFound'

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <NotFound />
      </MainTemplate>
    </PageTemplate>
  )
}

export default NotFoundPage