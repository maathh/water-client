import MaterialTable from 'material-table';
import React from 'react';
import db from '../../db'

class RefreshData extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = { locais: [] };
  }

  componentDidMount() {

    this.sensorBase = db.collection("sensorBase")
      .onSnapshot(function (querySnapshot) {
        var locais = [];
        querySnapshot.forEach(function (doc) {
          let row = doc.data(true);
          row['id'] = doc.id;
          locais.push(row);
        });
        this.setState({ locais: locais });
      }.bind(this));

  }

  componentWillUnmount() {
    this.sensorBase();
  }

  render() {
    return (
      <MaterialTable
        title="Locais"
        tableRef={this.tableRef}
        columns={[
          { title: 'id', field: 'id', hidden: true },
          { title: 'Descrição', field: 'description', },
          { title: 'Região', field: 'region' },
          { title: 'Estado', field: 'state' },
        ]}
        data={this.state.locais}
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () =>
              this.tableRef.current && this.tableRef.current.onQueryChange()
          },
          rowData => ({
            icon: 'info',
            tooltip: 'Delete User',
            onClick: (event, rowData) => console.log("You want to delete " + rowData.id),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );
  }
}

export default RefreshData;
