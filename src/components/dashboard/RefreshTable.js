import MaterialTable from 'material-table';
import React from 'react';

class RefreshData extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  render() {
    return (
      <MaterialTable
        title="Pontos Acumulados"
        tableRef={this.tableRef}
        columns={[
          {
            title: 'Empresa',
            field: 'Empresa',
            render: rowData => (
              <img
                alt="Empresa"
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.avatar}
              />
            )
          },
          { title: 'Nome', field: 'Nome' },
          { title: 'Qtde. pontos', field: 'pontos' },
          { title: 'Ações', field: 'actions' }
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = 'https://reqres.in/api/users?';
            url += 'per_page=' + query.pageSize;
            url += '&page=' + (query.page + 1);
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.data,
                  page: result.page - 1,
                  totalCount: result.total
                });
              });
          })
        }
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () =>
              this.tableRef.current && this.tableRef.current.onQueryChange()
          }
        ]}
      />
    );
  }
}

export default RefreshData;
