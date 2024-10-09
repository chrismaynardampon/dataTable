/* eslint-disable react/prop-types */
import '../App.css';

const TableContainer = ({children}) => {
  return <table>{children}</table>
}

const Thead = ({children}) => {
    return <thead>{children}</thead>
}

const Tbody = ({children}) => {
    return <tbody>{children}</tbody>
}

const Tfoot = ({children}) => {
    return <tfoot>{children}</tfoot>
}

const Row = ({children}) => {
    return <tr>{children}</tr>
}

const Column = ({children}) => {
    return <td>{children}</td>
}


const ColumnHeader = ({children}) => {
    return <th>{children}</th>
}

const Table = {
    TableContainer,
    Thead,
    Tbody,
    Tfoot,
    Row,
    Column,
    ColumnHeader
}

export default Table;