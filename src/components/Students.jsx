/* eslint-disable react/prop-types */
import Table from "./Table"
const Students = (props) => {
  return (
      <Table.Row>
        <Table.Column>{props.lastName}</Table.Column>
        <Table.Column>{props.firstName}</Table.Column>
        <Table.Column>{props.course}</Table.Column>
        <Table.Column>{props.birthdate}</Table.Column>
        <Table.Column>{props.age}</Table.Column>
    </Table.Row>
  )
}

export default Students
