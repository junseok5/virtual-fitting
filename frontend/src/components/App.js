import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, AdminPage, NotFoundPage, ProductEditPage, ProductListPage,
ProductPage, RegPage, RegUserPage, RegSellerPage, RegAddedPage, ManagePage,
UserPage, SellerPage, ProductWritePage, ProductProtoPage } from 'pages'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/page/:page" component={ProductListPage} />
        <Route path="/keyword/:keyword/:page?" component={ProductListPage} />
        <Route path="/category/:category/:page?" component={ProductListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register/user" component={RegUserPage} />
        <Route path="/register/seller" component={RegSellerPage} />
        <Route path="/register/added" component={RegAddedPage} />
        <Route path="/register" component={RegPage} />
        <Route path="/product/prototype/:id" component={ProductProtoPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/seller" component={SellerPage} />
        <Route path="/edit/product/:id" component={ProductEditPage} />
        <Route path="/write/product" component={ProductWritePage} />
        <Route path="/manage/:sellerId/:page" component={ManagePage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App