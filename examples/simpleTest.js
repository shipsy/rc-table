/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Table from 'rc-table';
import 'rc-table/assets/index.less';

const columns = [
  { title: 'title1', dataIndex: 'a', key: 'a', width: 100 },
  { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'title3', dataIndex: 'c', key: 'c', width: 200 },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'd',
    render() {
      return <a href="#">Operations</a>;
    },
  },
];

class Test extends React.Component {
  state = {
    data: [
      { a: 123, key: '1' },
      { a: 'cdd', b: 'edd', key: '2' },
      { a: '1333', c: 'eee', d: 2, key: '3' },
    ],
  };
  handleClick = () => {
    const data = this.state.data;
    data[0] = { ...data[0], a: data[0].a + 1 };
    this.setState({
      data,
    });
  };
  render() {
    return (
      <div>
        <h2>simple table</h2>
        <button onClick={this.handleClick} />
        <Table columns={columns} data={this.state.data} />
      </div>
    );
  }
}
ReactDOM.render(<Test />, document.getElementById('__react-content'));
