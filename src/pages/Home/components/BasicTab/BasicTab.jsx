import React, { Component } from 'react';
import { Tab } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import './BasicTab.scss';
import home from '../../../../reducer/home'


export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  click=(e)=>{
    e=parseInt(e)
    this.props.store.dispatch({
      type: 'SHOW',
      payload: e
    });
  }

  render() {
    console.info(this.props)
    const tabs = [
      { tab: '概况', key: 'dashboard' ,index:1},
      { tab: '分析页', key: 'analysis' ,index:2},
      { tab: '监控页', key: 'monitor' ,index:3},
      { tab: '工作台', key: 'workplace' ,index:4},
    ];
    // this.props.store.subscribe(()=>{
    //   console.log(11,this.props.store.getState().show)
    // })
    
    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <Tab contentStyle={{ display: 'none' }}>
            {tabs.map((item) => {
              return (
                <Tab.TabPane key={item.index} tab={item.tab} onClick={this.click}/>
              )
            })}
          </Tab>

        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tabCardStyle: {
    padding: 0,
  },
};
