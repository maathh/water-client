import MaterialTable from 'material-table';
import React from 'react';
import {db} from '../../firebase'
import { Redirect } from 'react-router'

class RefreshData extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = { locais: [], redirect: false, idRow: '' };
  }

  redirect = () => {
    this.setState({
      redirect: true
    })
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
    if(this.state.redirect) {
      const toDesc = "/dashboard/monitoramento/detalhes/"+this.state.idRow;
      return <Redirect to={toDesc} />
    }else{
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
              this.tableRef.current
          },
          rowData => ({
            icon: 'info',
            tooltip: 'Detalhes',
            onClick: (event, rowData) => this.setState({redirect: true, idRow: rowData.id}),
            disabled: rowData.birthYear < 2000,
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );
  }
  }
}

export default RefreshData;
