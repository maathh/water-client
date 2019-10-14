import MaterialTable from "material-table";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
Add: <AddBox/> ,
Check: <Check/> ,
Clear: <Clear/> ,
Delete: <DeleteOutline/> ,
DetailPanel:<ChevronRight/> ,
Edit:<Edit/> ,
Export:<SaveAlt/> ,
Filter:<FilterList/> ,
FirstPage:<FirstPage/> ,
LastPage:<LastPage/> ,
NextPage:<ChevronRight/> ,
PreviousPage:<ChevronLeft/> ,
ResetSearch:<Clear/> ,
Search:<Search/> ,
SortArrow:<ArrowUpward/> ,
ThirdStateCheck:<Remove/> ,
ViewColumn:<ViewColumn/>,
};

class RefreshData extends React.Component {
    constructor(props) {
      super(props);
      this.tableRef = React.createRef();
    }
    
    render() {
      return (
        <MaterialTable   
          title="Refresh Data Preview"
          tableRef={this.tableRef}
          columns={[
            {
              title: 'Avatar',
              field: 'avatar',
              render: rowData => (
                <img
                  style={{ height: 36, borderRadius: '50%' }}
                  src={rowData.avatar}
                />
              ),
            },
            { title: 'Id', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
          ]}
          data={query =>
            new Promise((resolve, reject) => {
              let url = 'https://reqres.in/api/users?'
              url += 'per_page=' + query.pageSize
              url += '&page=' + (query.page + 1)
              fetch(url)
                .then(response => response.json())
                .then(result => {
                  resolve({
                    data: result.data,
                    page: result.page - 1,
                    totalCount: result.total,
                  })
                })
            })
          }
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh Data',
              isFreeAction: true,
              onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            }
          ]}
        />
      )
    }
  }

  export default RefreshData;