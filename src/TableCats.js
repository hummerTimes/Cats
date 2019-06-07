import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import matchSorter from 'match-sorter'
import NewWindow from 'react-new-window';

const dataS = [{
    description: 'Jason Maurer',
    name: 'Tanner Linsley',
    url: '26'
}];

// const Demo = () => (
//     <NewWindow url={window.location.hostname}>
//       <h1>Hi 👋</h1>
//     </NewWindow>
//   )

var windowObjectReference;

function openRequestedPopup(url) {
  windowObjectReference = window.open(
    url,
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}

export default function TableBreed({data}) 
  { 
    const dataPreview = data === null ? dataS : data;
    const pNames = dataPreview.map(a => a.name);
    
    return (
      <ReactTable
        data={dataPreview} 
        defaultPageSize={20}
        className="-striped -highlight"   
        filterable
        columns = {[{
            Header: 'Name',
            accessor: 'url' ,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["name"] }),
            filterAll: true ,
            Cell: props => <img src={props.value} alt={'Soon meet...'} width='200px' height='200px' onClick={() => openRequestedPopup(props.value)}/> // Custom cell components!
            }, {
            Header: 'Breed',
            accessor: 'name',
            filterMethod: (filter, row) => {
              if (filter.value === "all") {
                return true;
              }
              return row[filter.id] === filter.value;
            },
            Filter: ({ filter, onChange }) =>{
              return (
              <select
                onChange={event => onChange(event.target.value)}
                style={{ width: "100%" }}
                value={filter ? filter.value : "all"}
              > 
                <option value="all">Show All</option>
                {
                  pNames.map( k => {
                  return <option key={k.toString()} value={k}>{k}</option>
                  })
                }
              </select>)
            } 
            }, {
            Header: 'Description',
            accessor: 'description'
            }]}
      />
  );}