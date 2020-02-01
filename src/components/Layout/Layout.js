import React, { Component } from "react";
import MyClass from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer"
class Layout extends Component {
    state={
        showSideDrawer: false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({
            showSideDrawer: false
        })
    }
    openToogleMenu=()=>{
        this.setState({
            showSideDrawer: true
        })
    }
    render() {
        return (
            <React.Fragment>
                <Toolbar openMenu={this.openToogleMenu} />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={MyClass.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
} 
    

export default Layout;