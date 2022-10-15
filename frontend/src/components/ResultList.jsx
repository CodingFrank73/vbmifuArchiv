
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ref', headerName: 'REF', width: 130 },
    { field: 'lot', headerName: 'LOT', width: 130 },
    { field: 'gtin', headerName: 'GTIN', width: 130 },
    {
        field: 'path',
        headerName: 'PATH',
        width: 130,
        renderCell: (params) => <a target='_blank' href={`${params.row.path}`}>DOWNLOAD</a>
    }
];
const ResultList = (props) => {

    let rows = props.result.map((item) => ({
        id: item._id,
        ref: item.refNo,
        lot: item.lotNo,
        gtin: item.gtin,
        path: item.path
    }))

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                hideFooterPagination
                hideFooter
            />
        </div>
    );
}

export default ResultList;