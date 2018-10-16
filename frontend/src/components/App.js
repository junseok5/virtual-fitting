import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, AdminPage, NotFoundPage, ProductEditPage, ProductListPage,
ProductPage, RegPage, RegUserPage, RegSellerPage, SellerPage,
UserPage } from 'pages'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register/user" component={RegUserPage} />
        <Route path="/register/seller" component={RegSellerPage} />
        <Route path="/register" component={RegPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/seller/:id" component={SellerPage} />
        <Route path="/edit/product/:id" component={ProductEditPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App