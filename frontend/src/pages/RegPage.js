import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import RegType from 'components/register/RegType'
import Base from 'containers/common/Base'

const RegPage = () => {
  return (
    <PageTemplate>
      <RegType />
      <Base />
    </PageTemplate>
  )
}

export default RegPage