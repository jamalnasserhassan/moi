import { useTable, useSortBy } from 'react-table';
import './Table.scss';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <div className='Table__responsive'>
      <table {...getTableProps()} className="Table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td key={cell.column.id} {...cell.getCellProps()}>{renderCellContent(cell)}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


const handleCheckboxChange = () => {
};

const renderCellContent = cell => {
  if (cell.column.cellType === 'avatar-text') {
    return (
      <div className='Table__avatar'>
        <img src={cell.value.avatarSrc} alt={cell.value.text}/>
        <span>{cell.value.text}</span>
      </div>
    );
  } else if (cell.column.cellType === 'checkbox') {
    return <input type="checkbox" checked={cell.value} onChange={handleCheckboxChange}/>;
  } else if (cell.column.cellType === 'menu-button') {
    return <button className='Table__button'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 19">
				<path fill="#8E9AA0" d="M.751 16.454v-.49c0-.011.003-.03.01-.053a.114.114 0 0 1 .027-.054c.07-.52.297-.963.678-1.332.381-.368.822-.564 1.322-.588.56-.048 1.054.075 1.482.37.428.296.72.71.875 1.242.024.06.045.126.063.199.017.073.033.145.045.218v.489a.125.125 0 0 1-.01.054l-.026.054a2.27 2.27 0 0 1-.58 1.222 2.133 2.133 0 0 1-1.171.661.702.702 0 0 1-.107.027.702.702 0 0 0-.108.027H2.77a.12.12 0 0 1-.053-.009l-.053-.027a2.151 2.151 0 0 1-1.188-.58 2.297 2.297 0 0 1-.651-1.159 4.205 4.205 0 0 0-.036-.135 4.275 4.275 0 0 1-.037-.136Zm4.5-13.909v.49c0 .011-.002.03-.008.053a.114.114 0 0 1-.027.054 2.226 2.226 0 0 1-.679 1.332 2.008 2.008 0 0 1-1.34.589 2.28 2.28 0 0 1-1.473-.39 2.194 2.194 0 0 1-.884-1.24 4.564 4.564 0 0 0-.045-.2 4.33 4.33 0 0 1-.045-.2v-.488c0-.024.003-.042.009-.054l.027-.054c.083-.471.259-.86.527-1.168C1.58.96 1.94.735 2.393.59c.059-.012.119-.027.178-.045.06-.018.12-.033.179-.045h.5c.012 0 .027.006.045.018a.087.087 0 0 0 .045.018c.464.073.863.266 1.196.58.333.314.554.706.661 1.177 0 .036.006.075.018.117l.036.136Zm0 6.7v.508a.148.148 0 0 1-.008.045.548.548 0 0 1-.027.064 2.3 2.3 0 0 1-.705 1.33c-.386.37-.83.566-1.33.59-.572.024-1.076-.121-1.51-.435a2.15 2.15 0 0 1-.848-1.267 3.562 3.562 0 0 1-.036-.163 3.564 3.564 0 0 0-.036-.163v-.507c0-.012.006-.027.018-.045a.112.112 0 0 0 .018-.064c.071-.519.304-.963.697-1.33.393-.37.839-.566 1.34-.59.57-.024 1.074.121 1.508.435.435.313.717.736.849 1.267.012.048.024.103.036.163.012.06.024.115.036.163h-.001Z"/>
			</svg>
		</button>;
  } else {
    return cell.render('Cell');
  }
};

export default Table;
