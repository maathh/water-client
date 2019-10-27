import MaterialTable from 'material-table';
import React from 'react';
import {db} from '../../firebase'

class DetalhesTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    const docRef = db.collection("sensorBase").doc(props.idBase);
    this.state = {
      dadosMonit: [],
      BaseMonit: {},
      docRef: docRef,
    };
  }

  async componentDidMount() {
    let varBaseMonit = {};
    await this.state.docRef.get().then(function (doc) {
      varBaseMonit = doc.data();
    })

    this.sensorData = this.state.docRef.collection("sensorData").orderBy("datatime", "desc").limit(10)
      .onSnapshot(function (querySnapshot) {
        var dadosMonit = [];
        querySnapshot.forEach(function (doc) {
          let row = doc.data(true);
          const date = row.datatime.toDate().toLocaleString();
          row['id'] = doc.id;
          row['datetime'] = date;
          row['base'] = varBaseMonit.description;
          dadosMonit.push(row);
        });
        this.setState({ dadosMonit: dadosMonit, BaseMonit: varBaseMonit });
      }.bind(this));
  }

  componentWillUnmount() {
    this.sensorData();
  }

  render() {
    return (
      <MaterialTable
        title="Monitoramento"
        tableRef={this.tableRef}
        columns={[
          { title: 'id', field: 'id', hidden: true },
          { title: 'Base Monitoramento', field: 'base', },
          { title: 'Data', field: 'datetime', },
          { title: 'Temperatura', field: 'celsius' },
          // { title: 'Ph', field: 'ph' },
        ]}
        data={this.state.dadosMonit}
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () =>
              this.tableRef.current
          },
        ]}
      />
    );
  }
}

export default DetalhesTable;
