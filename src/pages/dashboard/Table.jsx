import PropTypes from "prop-types";
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ columns, rows }) => {
    return (
        <div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          
        />
      </div>
    );
};

Table.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
  };

export default Table;