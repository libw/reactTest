import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import RealTimeOverview from './components/RealTimeOverview';
import Notifications from './components/Notifications';
import PerformanceChart from './components/PerformanceChart';
import GeneralWidget from './components/GeneralWidget';
import home from '../../reducer/home'
import { createStore } from 'redux';
const store = createStore(home);

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      show: 1
    };
  }

  switch(e) {
    // console.log(1, this.state.show)
    if (e== 1) {
      return <RealTimeOverview />
    } else if (e == 2) {
      return <Notifications />
    } else if (e == 3) {
      return <GeneralWidget />
    } else if (e == 4) {
      return <PerformanceChart />
    }
  }

  render() {
    store.subscribe(() => {
      this.setState({
        show: store.getState().show
      },()=>{
        console.log(this.state.show)
      })
      // console.log(store.getState().show)
    })

    return (
      <div className="home-page">
        <BasicTab store={store}/>
        {this.switch(this.state.show)}
      </div>
    );

  }

}
