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
        title="Locais de Monitoramento"
        tableRef={this.tableRef}
        columns={[
          { title: 'Descrição',field: 'descricao',},
          { title: 'Região', field: 'regiao' },
          { title: 'Estado', field: 'estado' },
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
